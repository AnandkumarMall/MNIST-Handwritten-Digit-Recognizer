# 🔢 MNIST Handwritten Digit Recognizer

A complete end-to-end deep learning project that trains a **Multilayer Perceptron (MLP)** on the MNIST dataset using **TensorFlow 2 / Keras**, and deploys the trained model in a browser-based math quiz app called **Math Garden** — powered by **TensorFlow.js**.

---

## 📁 Repository Structure

```
MNIST-Handwritten-Digit-Recognizer/
│
├── MNSIT model training.ipynb   # Main training notebook (MLP, TensorBoard, evaluation)
├── SavedModel.h5                # Trained model weights (Keras HDF5 format)
│
└── math-garden/                 # Browser app — draw digits, solve math problems!
    ├── index.html               # Main HTML page
    ├── drawing.js               # Canvas drawing logic
    ├── css/
    │   └── styles.css           # App styling
    ├── images/                  # Background SVG assets
    └── TFJS/                    # TensorFlow.js model + inference logic
        ├── model.json           # TF.js model architecture
        ├── group1-shard1of1.bin # Model weights (binary)
        ├── maths.js             # Math question logic
        ├── processing.js        # Image preprocessing for digit recognition
        └── vendor/
            └── opencv.js        # OpenCV.js for image processing
```

---

## 🧠 Model — MNIST MLP

The notebook `MNSIT model training.ipynb` builds and trains a fully-connected neural network on the MNIST handwritten digit dataset.

### Architecture

```
Input (784)  →  Dense(512, ReLU)  →  Dropout(0.2)  →  Dense(64, ReLU)  →  Dense(10, Softmax)
```

| Layer         | Units | Activation | Parameters |
|---------------|-------|------------|------------|
| Dense (layer_1) | 512 | ReLU       | 401,920    |
| Dropout       | —     | —          | 0          |
| Dense (layer_2) | 64  | ReLU       | 32,832     |
| Dense (output)  | 10  | Softmax    | 650        |
| **Total**     |       |            | **435,402**|

### Hyperparameters

| Parameter      | Value  |
|----------------|--------|
| Epochs         | 50     |
| Learning Rate  | 0.001  |
| Batch Size     | 1000   |
| Optimizer      | Adam   |
| Loss           | Categorical Crossentropy |
| Dropout Rate   | 0.2    |

### Results

| Metric         | Value  |
|----------------|--------|
| Test Accuracy  | **98.01%** |
| Test Loss      | 0.0834 |

---

## 🌐 Math Garden — Browser App

**Math Garden** is an interactive web application where the user:

1. Is presented with a simple math question (e.g., `3 + 2 = ?`)
2. Draws the answer as a digit on a canvas
3. Clicks **Check Answer** — the app uses the TF.js model to **recognize the handwritten digit** and verify the answer
4. A new question is generated automatically

The model running in the browser is the **same trained MNIST MLP**, exported to TensorFlow.js format and bundled in the `TFJS/` folder. OpenCV.js is used for preprocessing the drawn digit before feeding it to the model.

### How to Run Math Garden Locally

> No server needed — just open the file directly in your browser.

1. Clone the repository:
   ```bash
   git clone https://github.com/AnandkumarMall/MNIST-Handwritten-Digit-Recognizer.git
   ```
2. Open `math-garden/index.html` in any modern browser (Chrome / Edge recommended).
3. Draw your answer and click **Check Answer**!

> ⚠️ If the model doesn't load, try serving the folder with a local server (e.g., `python -m http.server 8080`) due to browser CORS restrictions on local file paths.

---

## 🏃 Running the Training Notebook

### Prerequisites

Install dependencies:

```bash
pip install numpy tensorflow pillow keras matplotlib tensorflowjs
```

Or use the provided file:

```bash
pip install -r requirements.txt
```

### Dataset

The notebook expects MNIST data in CSV format inside a `MNIST/` directory:

| File                  | Description                        |
|-----------------------|------------------------------------|
| [MNIST/digit_xtrain.csv](file:///d:/ML_Project/TensorFlow%20and%20Keras/MNIST/digit_xtrain.csv) | Training images — (60000, 784) |
| [MNIST/digit_ytrain.csv](file:///d:/ML_Project/TensorFlow%20and%20Keras/MNIST/digit_ytrain.csv) | Training labels — (60000,)     |
| [MNIST/digit_xtest.csv](file:///d:/ML_Project/TensorFlow%20and%20Keras/MNIST/digit_xtest.csv)  | Test images — (10000, 784)     |
| [MNIST/digit_ytest.csv](file:///d:/ML_Project/TensorFlow%20and%20Keras/MNIST/digit_ytest.csv)  | Test labels — (10000,)         |

> 📥 Download the MNIST CSV dataset from [Kaggle](https://www.kaggle.com/competitions/digit-recognizer/data).

### Launch Notebook

```bash
jupyter notebook "MNSIT model training.ipynb"
```

---

## 📊 Training Visualizations

The notebook includes rich visualizations:

- 📈 **Training & validation accuracy/loss curves**
- 🟦 **Confusion matrix** (10×10 for all digit classes)
- 🎯 **Per-class accuracy bar chart**
- 🖼️ **Sample predictions** with true vs. predicted labels
- 📋 **TensorBoard** integration for live monitoring

Run TensorBoard with:

```bash
tensorboard --logdir tensorboard_mnist_digit_logs/
```

---

## 💾 Saved Model

The trained model is saved in Keras HDF5 format as [SavedModel.h5](file:///d:/ML_Project/TensorFlow%20and%20Keras/SavedModel.h5).

To load and use the model:

```python
import tensorflow as tf

model = tf.keras.models.load_model('SavedModel.h5')
predictions = model.predict(x_test)
```

---

## 🛠️ Tech Stack

| Technology    | Role                                |
|---------------|-------------------------------------|
| TensorFlow 2  | Model training & evaluation         |
| Keras         | High-level model API                |
| NumPy         | Data manipulation                   |
| Matplotlib    | Visualizations                      |
| Seaborn       | Confusion matrix heatmap            |
| TensorFlow.js | In-browser model inference          |
| OpenCV.js     | Browser-side image preprocessing    |
| HTML/CSS/JS   | Math Garden web app                 |

---

## 👤 Author

**Anandkumar Mall**  
[GitHub](https://github.com/AnandkumarMall)


