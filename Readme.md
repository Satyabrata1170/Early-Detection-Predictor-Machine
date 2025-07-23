# 🩺 Early Detection Predictor Machine

> **“Early detection saves lives. This tool aims to assist in the timely diagnosis of breast cancer.”**  
> **“Artificial Intelligence is not a replacement for medical professionals, but a tool to support them.”**


##  Introduction

Breast cancer is one of the most prevalent cancers among women globally. Detecting it in its early stages significantly improves treatment outcomes and survival rates.  
This project presents a **web-based AI tool** that uses **deep learning** to classify breast images (real photos or X-rays) into two categories:
- **Cancer**
- **Non-Cancer**

The system offers an easy-to-use and accessible interface that can be used by:
- Individual users
- Hospitals and clinics
- Medical professionals

---

##  Project Goal

To **prevent breast cancer** through early detection by leveraging Artificial Intelligence (AI) for fast, reliable predictions — supporting both **individual awareness** and **hospital-level diagnostics**.

---

##  Key Features

- **Upload Mode**: Users can upload breast or X-ray images from their device.
-  **Camera Mode**: Capture live images directly using a connected webcam.
-  **Hospital Integration**: App connects to imaging machines (like ultrasound/X-ray) in hospitals for real-time screening.
-  **AI Prediction**: Classifies the input as “Cancer” or “Non-Cancer” using a CNN model.
-  **Responsive UI**: Built with modern frontend technologies (HTML5, CSS3, JS) including animations and hover effects.
-  **Privacy Preserved**: No image is stored permanently; images are processed in real-time.

---

##  How It Works

1. **Image Input**  
   Users choose one of three methods:
   - Upload from computer
   - Capture using camera
   - Connect to imaging machines (hospital mode)

2. **Preprocessing**  
   - The image is resized to 128x128 and normalized (scaled 0–1).

3. **Model Prediction**  
   - A CNN model (trained using Keras & TensorFlow) predicts whether the image shows signs of cancer.

4. **Output Display**  
   - The system displays the result (`Cancer` or `Non-Cancer`) and the uploaded image on the screen.

---

##  Tech Stack

| Layer         | Tools/Frameworks                      |
|---------------|----------------------------------------|
| Frontend      | HTML5, CSS3, JavaScript, FontAwesome   |
| Backend       | Python, Flask                          |
| Deep Learning | TensorFlow, Keras                      |
| Others        | OpenCV, NumPy, Pillow, Jupyter Notebook|

---

##  Folder Structure

Early Detection Predictor Machine/
├── app.py
├── model.weights.best.keras
├── templates/
│ ├── index.html
│ ├── webcam.html
│ └── elements.html
├── static/
│ ├── uploads/
│ ├── main.css, noscript.css, fontawesome
│ ├── main.js, util.js, jquery libs
│ ├── bg.jpg, overlay.png
│ ├── pic01.jpg ... pic09.jpg
├── Breast_Cancer_realimg.ipynb
└── requirements.txt


---

##  How to Run the Project

###  Prerequisites

- Python 3.8+
- Flask
- TensorFlow / Keras
- Pillow, NumPy, OpenCV (optional if using camera)

###  Local Execution

```bash
# Step 1: Install dependencies
pip install -r requirements.txt

# Step 2: Run Flask server
python app.py

# Step 3: Open in browser
http://127.0.0.1:5000

---


---

## Disclaimer

> This application is intended for **educational and assistive purposes only**.  
> It is **not a substitute** for professional medical diagnosis.  
> Always consult with a certified medical professional for healthcare decisions.

---

##  Author

**Satyabrata Brahmachary**  
_Data Science Intern | AI & Computer Vision Enthusiast_  

