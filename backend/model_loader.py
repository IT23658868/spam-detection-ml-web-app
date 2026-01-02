import pickle

with open("spam_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)


def predict_spam(text: str):
    text_vec = vectorizer.transform([text])
    prediction = model.predict(text_vec)[0]
    return prediction
