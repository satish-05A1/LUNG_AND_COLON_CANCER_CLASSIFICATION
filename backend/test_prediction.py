import argparse
from pathlib import Path

from PIL import Image

from predictor import predict_image
from model_loader import backend_model


def main():
    parser = argparse.ArgumentParser(description='Test the Swin Transformer prediction pipeline.')
    parser.add_argument('image_path', type=Path, help='Path to the input image file.')
    args = parser.parse_args()

    if not args.image_path.exists():
        raise FileNotFoundError(f'Image not found: {args.image_path}')

    image = Image.open(args.image_path).convert('RGB')
    result = predict_image(image)

    print('# ====================================')
    print('SWIN TRANSFORMER MODEL TEST')
    print('Model:')
    print(backend_model['model_name'])
    print()
    print('Device:')
    print(str(backend_model['device']).upper())
    print()
    print('Image:')
    print(args.image_path.name)
    print()
    print('Predicted Class:')
    print(result['predicted_class'])
    print()
    print('Confidence:')
    print(f"{result['confidence']:.2f}%")
    print()
    print('Class Probabilities:')
    for label, value in result['probabilities'].items():
        print(f'{label}: {value:.2f}%')
    print('====================================')


if __name__ == '__main__':
    main()
