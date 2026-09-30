from pathlib import Path
from PIL import Image
import torch
import torch.nn.functional as F
from torchvision import transforms

try:
    from torchvision.models import resnet18, ResNet18_Weights
except ImportError:
    from torchvision.models import resnet18
    ResNet18_Weights = None


VALIDATION_THRESHOLD = 0.70
REFERENCE_CLASSES = ['colon_aca', 'colon_n', 'lung_aca', 'lung_n', 'lung_scc']
REFERENCE_ROOT = Path(__file__).resolve().parent / 'reference_images'
DEVICE = torch.device('cpu')


class ImageValidationError(Exception):
    pass


def _build_feature_extractor():
    if ResNet18_Weights is not None:
        weights = ResNet18_Weights.DEFAULT
        model = resnet18(weights=weights)
        preprocess = weights.transforms()
    else:
        model = resnet18(pretrained=True)
        preprocess = transforms.Compose([
            transforms.Resize(256),
            transforms.CenterCrop(224),
            transforms.ToTensor(),
            transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]),
        ])

    feature_extractor = torch.nn.Sequential(*list(model.children())[:-1])
    feature_extractor.eval()
    for param in feature_extractor.parameters():
        param.requires_grad = False
    feature_extractor.to(DEVICE)
    return feature_extractor, preprocess


try:
    FEATURE_EXTRACTOR, PREPROCESS = _build_feature_extractor()
    VALIDATOR_LOAD_ERROR = None
except Exception as exc:
    FEATURE_EXTRACTOR = None
    PREPROCESS = None
    VALIDATOR_LOAD_ERROR = str(exc)


_VALIDATOR_CACHE = {}


def _get_validator(reference_root):
    resolved_root = Path(reference_root).resolve()
    if resolved_root in _VALIDATOR_CACHE:
        return _VALIDATOR_CACHE[resolved_root]

    validator = ReferenceImageValidator(resolved_root)
    _VALIDATOR_CACHE[resolved_root] = validator
    return validator


class ReferenceImageValidator:
    """Validate whether an uploaded image is consistent with the histopathology domain."""

    def __init__(self, reference_root):
        self.reference_root = Path(reference_root)
        self.reference_embeddings = self._load_reference_embeddings()

    def _load_reference_embeddings(self):
        if not self.reference_root.exists():
            raise ImageValidationError(
                f'Reference folder not found: {self.reference_root}'
            )

        embeddings = []
        for class_name in REFERENCE_CLASSES:
            class_dir = self.reference_root / class_name
            if not class_dir.exists() or not class_dir.is_dir():
                continue

            for image_path in sorted(class_dir.iterdir()):
                if not image_path.is_file():
                    continue
                try:
                    image = Image.open(image_path).convert('RGB')
                    embeddings.append(self._compute_embedding(image))
                except Exception:
                    continue

        if not embeddings:
            raise ImageValidationError(
                'No valid reference images found in the reference dataset.'
            )

        return torch.stack(embeddings)

    def _compute_embedding(self, image):
        if FEATURE_EXTRACTOR is None or PREPROCESS is None:
            raise ImageValidationError(
                f'Pretrained feature extractor unavailable: {VALIDATOR_LOAD_ERROR}'
            )

        image = image.convert('RGB')
        tensor = PREPROCESS(image).unsqueeze(0).to(DEVICE)
        with torch.no_grad():
            embedding = FEATURE_EXTRACTOR(tensor)
        embedding = embedding.view(embedding.size(0), -1)
        embedding = F.normalize(embedding, p=2, dim=1)
        return embedding.squeeze(0).cpu()

    def validate(self, image):
        if FEATURE_EXTRACTOR is None or PREPROCESS is None:
            return {
                'accepted': False,
                'score': 0.0,
                'reason': f'Pretrained feature extractor unavailable: {VALIDATOR_LOAD_ERROR}',
            }

        if image is None:
            return {
                'accepted': False,
                'score': 0.0,
                'reason': 'No image was provided for validation.',
            }

        try:
            query_embedding = self._compute_embedding(image)
        except Exception as exc:
            return {
                'accepted': False,
                'score': 0.0,
                'reason': f'Unable to process uploaded image: {exc}',
            }

        similarities = F.cosine_similarity(
            query_embedding.unsqueeze(0),
            self.reference_embeddings,
            dim=1,
        )
        best_score = float(similarities.max().item())
        accepted = best_score >= VALIDATION_THRESHOLD
        reason = (
            'Accepted: image appears consistent with the histopathology reference domain.'
            if accepted
            else 'Rejected: image does not appear consistent with the histopathology reference domain.'
        )

        return {
            'accepted': accepted,
            'score': best_score,
            'reason': reason,
        }


def validate_image(reference_root, image):
    if FEATURE_EXTRACTOR is None or PREPROCESS is None:
        return {
            'accepted': False,
            'score': 0.0,
            'reason': f'Pretrained feature extractor unavailable: {VALIDATOR_LOAD_ERROR}',
        }

    try:
        validator = _get_validator(reference_root)
    except ImageValidationError as exc:
        return {
            'accepted': False,
            'score': 0.0,
            'reason': str(exc),
        }
    except Exception as exc:
        return {
            'accepted': False,
            'score': 0.0,
            'reason': f'Unable to initialize validator: {exc}',
        }

    return validator.validate(image)


def validate_image_file(reference_root, image_path):
    if FEATURE_EXTRACTOR is None or PREPROCESS is None:
        return {
            'accepted': False,
            'score': 0.0,
            'reason': f'Pretrained feature extractor unavailable: {VALIDATOR_LOAD_ERROR}',
        }

    try:
        image = Image.open(image_path).convert('RGB')
    except Exception as exc:
        return {
            'accepted': False,
            'score': 0.0,
            'reason': f'Unable to open uploaded image: {exc}',
        }

    return validate_image(reference_root, image)


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='Validate an image against histopathology references.')
    parser.add_argument('image_path', help='Path to the image to validate.')
    parser.add_argument(
        '--reference-root',
        default=str(REFERENCE_ROOT),
        help='Path to the reference_images folder.',
    )
    args = parser.parse_args()

    result = validate_image_file(args.reference_root, args.image_path)
    print(result)
