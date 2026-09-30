from fastapi import FastAPI, File, HTTPException, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from io import BytesIO
from pathlib import Path
from PIL import Image

from predictor import predict_image
from model_loader import backend_model
from image_validator import validate_image

app = FastAPI(title='Lung and Colon Cancer Classifier')

origins = [
    'http://localhost:5173',
    'http://127.0.0.1:5173',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get('/health')
def health_check():
    return {
        'status': 'ok',
        'model': backend_model['model_name'],
    }


@app.post('/predict')
async def predict(file: UploadFile = File(...)):
    if file.content_type.split('/')[0] != 'image':
        raise HTTPException(status_code=400, detail='Uploaded file must be an image.')

    try:
        contents = await file.read()
        image = Image.open(BytesIO(contents)).convert('RGB')
    except Exception as exc:
        raise HTTPException(status_code=400, detail='Unable to process the uploaded image.') from exc

    validation = validate_image(
        Path(__file__).resolve().parent / 'reference_images',
        image,
    )
    if not validation['accepted']:
        raise HTTPException(
            status_code=400,
            detail='Invalid input image. Please upload a lung or colon histopathology image.',
        )

    try:
        result = predict_image(image)
    except Exception as exc:
        raise HTTPException(status_code=500, detail='Prediction failed. Please check the backend logs.') from exc

    return result
