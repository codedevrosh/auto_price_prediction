This project predicts the price of an automobile based on user-input specifications such as engine size, horsepower, fuel type, and body style.
It uses a trained regression model to generate accurate price predictions.
The project includes a Flask backend, HTML/CSS frontend, and serialized model files (model.pkl, y\_scaler.pkl) for real-time predictions.

##### **Project Structure:**
```
AutoPricePrediction/

│

├── app.py                     		# Flask backend file

├── AutoPricePred.ipynb  	# Google Colab (data analysis + model training)

├── model.pkl                  		# Trained XGBoost model

├── y\_scaler.pkl              		# StandardScaler for input scaling

├── Procfile                            # Deployment instruction file for Render/Railway

│

├── templates/                 		# HTML frontend templates

│   ├── index.html             		# Main webpage for input and prediction

│

├── static/                    		# CSS, JS, and image assets

│   ├── style.css              		# Page styling

│   ├── script.js              		# Page functions

│   ├── info.png

│   ├── background.png

│   └── favicon.png

│

├── requirements.txt           		# Python dependencies

└── readme.md                  		# Project documentation (this file)
```


##### **Technologies Used:**



Google Colab – Model training \& preprocessing



Python 3.11+



Pandas, NumPy – Data handling



Scikit-learn – Preprocessing and scaling



XGBoost – Model training and prediction



Pickle – Model serialization



Flask – Web framework for backend



HTML, CSS, JavaScript – Frontend



##### **How It Works:**



User Input: The user enters car specifications (e.g., fuel type, engine size, horsepower).



Backend Processing: The Flask app loads the trained model (model.pkl) and scaler (y\_scaler.pkl) to preprocess inputs.



Prediction: The model predicts the car price in real time.



Output Display: The predicted price is shown on the result page of the web interface.



##### **Quick Start:**



1\. Navigate to your project folder

cd Desktop\\AutoPricePrediction



2\. Install dependencies

pip install -r requirements.txt

\# or manually

pip install flask numpy pandas scikit-learn xgboost



3\. Run the Flask app

python app.py



 Open http://127.0.0.1:5000/ in your browser

 Enter car details → click Predict Price → see instant results

 Stop the app anytime with CTRL + C



##### **Conclusion:**



This project demonstrates a complete end-to-end pipeline for auto mobile price prediction — from data preprocessing and XGBoost model training in Google Colab to deployment with Flask.

It offers a simple yet powerful web interface for real-time predictions.

Anyone new to the project can easily set it up, retrain the model in Colab, and deploy locally or online.



##### **👨‍💻 Author:**



Arockia Roshan A

Data Science Enthusiast | ML Developer




