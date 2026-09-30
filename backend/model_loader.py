import json
from pathlib import Path

import timm
import torch

BASE_DIR = Path(__file__).resolve().parent
MODEL_DIR = BASE_DIR / 'model'
CLASS_NAMES_PATH = MODEL_DIR / 'class_names.json'
CHECKPOINT_PATH = MODEL_DIR / 'best_swin.pth'
MODEL_NAME = 'swin_base_patch4_window7_224'


def load_model():
    device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

    if not CLASS_NAMES_PATH.exists():
        raise FileNotFoundError(f'Class names file not found at {CLASS_NAMES_PATH}')
    if not CHECKPOINT_PATH.exists():
        raise FileNotFoundError(f'Model checkpoint not found at {CHECKPOINT_PATH}')

    with open(CLASS_NAMES_PATH, 'r', encoding='utf-8') as f:
        class_names = json.load(f)

    if not isinstance(class_names, list) or len(class_names) == 0:
        raise ValueError('class_names.json must contain a non-empty list of class names.')

    num_classes = len(class_names)

    model = timm.create_model(
        MODEL_NAME,
        pretrained=False,
        num_classes=num_classes,
    )

    checkpoint = torch.load(CHECKPOINT_PATH, map_location=device)

    if isinstance(checkpoint, dict) and 'state_dict' in checkpoint:
        state_dict = checkpoint['state_dict']
    else:
        state_dict = checkpoint

    try:
        model.load_state_dict(state_dict)
    except RuntimeError:
        # support checkpoint saved from DataParallel or DistributedDataParallel
        cleaned_state = {
            k.replace('module.', ''): v for k, v in state_dict.items()
        }
        model.load_state_dict(cleaned_state)

    model.to(device)
    model.eval()

    return {
        'model': model,
        'device': device,
        'class_names': class_names,
        'model_name': MODEL_NAME,
    }


backend_model = load_model()
