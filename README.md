📧 Spam Detection ML Web Application

A full-stack machine learning web application that detects whether a message is Spam or Not Spam using a trained ML model.

🚀 Features

Machine Learning based spam detection

FastAPI backend with REST API

React + Vite frontend

Tailwind CSS for modern UI

Real-time predictions

Full-stack integration

🧠 Machine Learning Model

Algorithm: Multinomial Naive Bayes

Text Vectorization: CountVectorizer (Bag of Words)

Dataset: SMS Spam Collection Dataset (UCI)

Accuracy: ~97–98%

📊 Model Evaluation Results
📈 Learning Curve

This graph shows that both training and validation accuracy are high and converge closely, indicating that the model is well-fitted (no underfitting or overfitting).

🔢 Confusion Matrix

The confusion matrix shows that the model correctly classifies most spam and non-spam messages, with very few false negatives and almost no false positives.

🎯 Precision vs Recall

Precision ≈ 100% → Almost no normal messages are incorrectly marked as spam

Recall ≈ 94% → Most spam messages are successfully detected

🖥️ Application Working Screenshots
✅ Non-Spam Message Detection

The application correctly identifies a normal message as Not Spam.

🚨 Spam Message Detection

The application correctly identifies a promotional message as Spam.

🏗️ Project Architecture
Frontend (React + Tailwind)
        ↓ HTTP (JSON)
Backend (FastAPI)
        ↓
ML Model (Naive Bayes)

📁 Project Structure
spam-detection-project/
├── backend/
│   ├── app.py
│   ├── model_loader.py
│   ├── requirements.txt
│   ├── spam_model.pkl
│   └── vectorizer.pkl
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── README.md

▶️ How to Run Locally
1️⃣ Backend Setup
cd backend
python -m venv .venv
.venv\Scripts\activate
python -m pip install -r requirements.txt
python -m uvicorn app:app --reload


Backend runs at:

http://127.0.0.1:8000

2️⃣ Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs at:

http://localhost:5173

🔌 API Endpoint
POST /predict

Request

{
  "text": "Congratulations! You won a free iPhone"
}


Response

{
  "prediction": "Spam 🚨"
}

🧪 Example Test Messages
Spam

"Congratulations! You have won a free gift card."

"Free entry in a competition. Text WIN now!"

Not Spam

"Are we meeting today at 6 pm?"

"Please send the lecture notes."

🧠 Technologies Used

Python

FastAPI

Scikit-learn

React (Vite)

Tailwind CSS

Git & GitHub

🎓 Academic Use

This project was developed as a full-stack machine learning application for academic and learning purposes.

👨‍💻 Author

Ishan Dhanusanka

GitHub: https://github.com/IT23658868