from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from model_loader import predict_spam

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class Message(BaseModel):
    text: str


@app.post("/predict")
def predict(message: Message):
    result = predict_spam(message.text)
    return {
        "prediction": "Spam 🚨" if result == 1 else "Not Spam ✅"
    }
