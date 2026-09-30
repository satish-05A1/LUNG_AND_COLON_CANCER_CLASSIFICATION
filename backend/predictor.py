import torch

from model_loader import backend_model
from preprocessing import preprocess_image


MODEL = backend_model['model']
DEVICE = backend_model['device']
CLASS_NAMES = backend_model['class_names']


def predict_image(image):
    tensor = preprocess_image(image)
    tensor = tensor.to(DEVICE)

    MODEL.eval()
    with torch.no_grad():
        outputs = MODEL(tensor)
        probabilities = torch.softmax(outputs, dim=1).squeeze(0)

    confidence, index = torch.max(probabilities, dim=0)
    predicted_class = CLASS_NAMES[index.item()]

    probability_mapping = {
        CLASS_NAMES[i]: float(probabilities[i].item() * 100)
        for i in range(len(CLASS_NAMES))
    }

    return {
        'predicted_class': predicted_class,
        'confidence': float(confidence.item() * 100),
        'probabilities': probability_mapping,
    }
