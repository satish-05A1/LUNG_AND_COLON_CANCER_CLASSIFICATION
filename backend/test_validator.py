import argparse
from pathlib import Path

from image_validator import validate_image_file


def find_reference_image(reference_root):
    reference_root = Path(reference_root)
    if not reference_root.exists() or not reference_root.is_dir():
        raise FileNotFoundError(f'Reference root not found: {reference_root}')

    for class_dir in sorted(reference_root.iterdir()):
        if not class_dir.is_dir():
            continue
        for image_path in sorted(class_dir.iterdir()):
            if image_path.is_file():
                return image_path

    raise FileNotFoundError(f'No reference image found in {reference_root}')


def print_result(image_path, result):
    print(f'Image: {image_path}')
    print(f'  accepted: {result["accepted"]}')
    print(f'  score: {result["score"]:.4f}')
    print(f'  reason: {result["reason"]}')
    print()


def main():
    parser = argparse.ArgumentParser(description='Test the histopathology image validator.')
    parser.add_argument(
        'unrelated_images',
        nargs='+',
        help='One or more unrelated images (e.g. D:\\leaf.png) to validate.',
    )
    parser.add_argument(
        '--reference-root',
        default='reference_images',
        help='Path to the reference_images folder.',
    )
    args = parser.parse_args()

    reference_image = find_reference_image(args.reference_root)
    print('Testing validator with one genuine reference image:')
    reference_result = validate_image_file(args.reference_root, reference_image)
    print_result(reference_image, reference_result)

    for unrelated_path in args.unrelated_images:
        unrelated_image = Path(unrelated_path)
        if not unrelated_image.exists() or not unrelated_image.is_file():
            print(f'Unrelated image not found: {unrelated_image}')
            continue

        print('Testing validator with unrelated image:')
        unrelated_result = validate_image_file(args.reference_root, unrelated_image)
        print_result(unrelated_image, unrelated_result)


if __name__ == '__main__':
    main()
