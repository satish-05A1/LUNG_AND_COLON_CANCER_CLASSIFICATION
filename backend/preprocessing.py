from torchvision import transforms

preprocess_transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]),
])


def preprocess_image(image):
    image = image.convert('RGB')
    tensor = preprocess_transform(image)
    return tensor.unsqueeze(0)
