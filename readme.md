This project predicts the price of an automobile based on user-input specifications such as engine size, horsepower, fuel type, and body style.

It uses a trained XGBoost regression model to generate accurate price predictions.



The project includes a Flask backend, HTML/CSS frontend, and serialized model files (model.pkl, y\_scaler.pkl) for real-time predictions.



##### **Project Structure:**



AutoPricePrediction/

│

├── app.py                     # Flask backend file

├── model.pkl                  # Trained XGBoost model

├── scaler.pkl                 # StandardScaler for input scaling

│

├── templates/                 # HTML frontend templates

│   ├── index.html             # Main webpage for input and prediction

│

├── static/                    # CSS, JS, and image assets

│   ├── style.css              # Page styling

    └── script.js              # Page functions

│   └── info.png

│   └── background.png

|   └── favicon.png

|

├── requirements.txt           # Python dependencies

└── readme.md                  # Project documentation (this file)



##### **Technologies Used:**



Python 3.11+



Flask – Web framework for backend



HTML, CSS, JavaScript – Frontend



Scikit-learn – Preprocessing and scaling



XGBoost – Model training and prediction



Pickle – Model serialization





##### **How It Works:**



User Input: The user enters car specifications (e.g., fuel type, engine size, horsepower).



Backend Processing: The Flask app loads the trained model (model.pkl) and scaler (y\_scaler.pkl) to preprocess inputs.



Prediction: The model predicts the car price in real time.



Output Display: The predicted price is shown on the result page of the web interface.







