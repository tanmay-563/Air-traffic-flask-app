# ✈️ Air Traffic Detection - Flask App

## 🚀 Overview

This Flask-based web application simulates **air traffic detection** by identifying the closest pair of aircraft using a basic AI model (Logistic Regression). It visualizes aircraft positions on a canvas and calculates the shortest distance between them.

## 🎯 Features

- Generate random aircraft positions dynamically.
- Identify the **closest pair** of aircraft using the closest pair algorithm.
- Send data to an AI model to predict collision risk.
- Real-time distance and aircraft info updates.
- Beautiful and interactive front-end with HTML, CSS, and JS.

## 🛠️ Tech Stack

- **Backend:** Flask (Python), scikit-learn, NumPy, Matplotlib
- **Frontend:** HTML, CSS, JavaScript
- **AI Model:** Logistic Regression for collision risk prediction

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/air-traffic-flask-app.git
   cd air-traffic-flask-app
Create and activate virtual environment:

bash
Copy
Edit
python -m venv venv
# Activate on Windows
.\venv\Scripts\activate
# Activate on Mac/Linux
source venv/bin/activate
Install required dependencies:

bash
Copy
Edit
pip install -r requirements.txt
Run the application:

bash
Copy
Edit
python app.py
Open in browser:

cpp
Copy
Edit
http://127.0.0.1:5000
🧠 AI Model Integration
The AI model takes the aircraft positions and predicts the risk of collision.
Model used: Logistic Regression (Basic version).
Predictions are displayed dynamically after identifying the closest aircraft pair.
🤝 Contributing
Feel free to contribute and enhance the app! Fork, clone, and submit PRs. All ideas are welcome!

