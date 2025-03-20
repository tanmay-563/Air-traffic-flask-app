from flask import Flask, request, jsonify
import numpy as np
from sklearn.linear_model import LogisticRegression
from flask import Flask, request, jsonify, render_template


app = Flask(__name__)

# Dummy AI model (we'll train it properly soon!)
model = LogisticRegression()

# Sample training data for collision (distance-based example)
X_train = np.array([[10], [20], [30], [40], [50], [60]])
y_train = np.array([1, 1, 0, 0, 0, 0])  # 1 = Danger, 0 = Safe

# Train the model with dummy data
model.fit(X_train, y_train)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    distance = data.get('distance')

    if distance is None:
        return jsonify({"error": "Distance not provided"}), 400

    # Predict collision risk
    prediction = model.predict(np.array([[distance]]))[0]
    result = "DANGER! ⚠️" if prediction == 1 else "Safe ✅"

    return jsonify({"status": result, "distance": distance})

if __name__ == "__main__":
    app.run(debug=True)
