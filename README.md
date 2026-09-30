# Automated Lung and Colon Cancer Classification from Histopathological Images Using Deep Learning

## 📌 Project Overview

This project presents an automated deep learning system for classifying lung and colon histopathological images using a **Swin Transformer** model.

The system accepts a histopathological image as input and predicts one of five categories:

* Colon Adenocarcinoma
* Colon Normal
* Lung Adenocarcinoma
* Lung Normal
* Lung Squamous Cell Carcinoma

The project includes a web-based interface where users can upload an image and receive the predicted class and confidence score.

---

## 🎯 Objectives

* Automate the classification of lung and colon histopathological images.
* Reduce the time required for manual image analysis.
* Use a Swin Transformer for effective image classification.
* Provide a simple web interface for image prediction.
* Reject unrelated images that are not suitable histopathological inputs.

---

## 🧠 Model

The project uses the **Swin Transformer** architecture:

**Model:** `swin_base_patch4_window7_224`

The model processes images resized to:

**224 × 224 pixels**

The classifier contains **5 output classes**.

---

## 📂 Dataset

The project uses the **LC25000 Lung and Colon Cancer Histopathological Image Dataset**.

### Classes

| Class       | Description                  |
| ----------- | ---------------------------- |
| `colon_aca` | Colon Adenocarcinoma         |
| `colon_n`   | Normal Colon                 |
| `lung_aca`  | Lung Adenocarcinoma          |
| `lung_n`    | Normal Lung                  |
| `lung_scc`  | Lung Squamous Cell Carcinoma |

The dataset contains **25,000 histopathological images** across these five classes.

---

## 🔄 Methodology

```text
Histopathological Image
          ↓
Image Validation
          ↓
Image Preprocessing
          ↓
Resize to 224 × 224
          ↓
Swin Transformer
          ↓
Feature Extraction
          ↓
Classification
          ↓
Predicted Class + Confidence
```

---

## 🛠️ Technologies Used

### Frontend

* React.js
* Vite
* JavaScript
* HTML
* CSS
* Tailwind CSS

### Backend

* Python
* FastAPI
* Uvicorn

### Deep Learning

* PyTorch
* Torchvision
* timm
* Swin Transformer

### Development

* Visual Studio Code
* Google Colab
* Git
* GitHub

---

## 📊 Model Performance

The trained Swin Transformer achieved:

| Metric    |     Result |
| --------- | ---------: |
| Accuracy  | **99.76%** |
| Precision | **99.76%** |
| Recall    | **99.76%** |
| F1-Score  | **99.76%** |

These results are based on the project's evaluation setup.

---

## 🌐 Web Application

The application provides a simple workflow:

1. Open the web application.
2. Upload a histopathological image.
3. The backend validates the image.
4. The image is preprocessed.
5. The Swin Transformer performs classification.
6. The predicted class and confidence score are displayed.

The application also includes validation to reject unrelated images such as ordinary photographs or non-histopathological images.

---

## 📁 Project Structure

```text
Lung and Colon Cancer/
│
├── backend/
│   ├── app.py
│   ├── image_validator.py
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
│
├── swin_lung_colon/
│   └── model files
│
├── README.md
└── .gitignore
```

> Large model files and datasets are excluded from GitHub using `.gitignore`.

---

## ⚙️ Running the Backend

Open a terminal in the backend directory:

```bash
cd "D:\Lung and Colon Cancer\backend"
```

Run:

```bash
py -m uvicorn app:app --reload
```

The backend will normally be available at:

```text
http://127.0.0.1:8000
```

FastAPI documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 💻 Running the Frontend

Open another terminal:

```bash
cd "D:\Lung and Colon Cancer\frontend"
```

Install dependencies if required:

```bash
npm install
```

Start the frontend:

```bash
npm run dev
```

The Vite development server will provide the local web application address.

---

## 🔐 Input Validation

The application includes an image validation stage before prediction.

If an unrelated image is uploaded, the system can reject it with a message such as:

> Invalid input image. Please upload a lung or colon histopathology image.

This helps prevent inappropriate images from being passed directly to the cancer classification model.

---

## 🔬 Research Project

This project was developed as part of a final-year research project on deep-learning-based classification of lung and colon cancer histopathological images.

### Conference

**IEEE 2nd International Conference on Emerging Computing and Communication Technologies (ICEC2NT 2026)**

### Paper Title

**Automated Lung and Colon Cancer Classification from Histopathological Images Using Deep Learning**

---

## 🚀 Future Work

* Explainable AI (XAI) for model predictions.
* Validation using multi-center datasets.
* Expansion to additional cancer types.
* Improvement of model efficiency for resource-constrained environments.
* Development of a more advanced clinical decision-support interface.

---

## ⚠️ Disclaimer

This project is developed for **academic and research purposes**.

The predictions generated by this system should not be considered a medical diagnosis or a replacement for evaluation by qualified healthcare professionals.

---

## 👨‍💻 Author

**KOTTU SATISH KUMAR**

Computer Science Engineering
Narasaraopeta Engineering College

---

## ⭐ Acknowledgement

The project uses the LC25000 histopathological image dataset and open-source deep learning libraries for research and educational purposes.
