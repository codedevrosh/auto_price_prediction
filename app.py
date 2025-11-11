from flask import Flask, request, jsonify, render_template
import pickle
import numpy as np

app = Flask(__name__,template_folder='templates', static_folder='static')

# Load your ML model
model = pickle.load(open("model.pkl", "rb"))
y_scaler = pickle.load(open("y_scaler.pkl", "rb"))

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        # Define feature order exactly like during training
        feature_order = [
            'symboling', 'normalized-losses',
            'make', 'fuel-type', 'aspiration', 'num-of-doors',
            'body-style', 'drive-wheels', 'engine-location',
            'wheel-base', 'length', 'width', 'height', 'curb-weight',
            'engine-type', 'num-of-cylinders', 'engine-size', 'fuel-system',
            'bore', 'stroke', 'compression-ratio', 'horsepower',
            'peak-rpm', 'city-mpg', 'highway-mpg'
        ]

        # Collect values in the same order
        values = [
            float(data['symboling']),
            float(data['normalized-losses']),
            data['make'],
            data['fuel-type'],
            data['aspiration'],
            data['num-of-doors'],
            data['body-style'],
            data['drive-wheels'],
            data['engine-location'],
            float(data['wheel-base']),
            float(data['length']),
            float(data['width']),
            float(data['height']),
            float(data['curb-weight']),
            data['engine-type'],
            data['num-of-cylinders'],
            float(data['engine-size']),
            data['fuel-system'],
            float(data['bore']),
            float(data['stroke']),
            float(data['compression-ratio']),
            float(data['horsepower']),
            float(data['peak-rpm']),
            float(data['city-mpg']),
            float(data['highway-mpg'])
        ]

        # ✅ Convert to DataFrame for ColumnTransformer
        import pandas as pd
        input_df = pd.DataFrame([values], columns=feature_order)

        # Predict using the full pipeline
        scaled_pred = model.predict(input_df)[0]
        prediction = y_scaler.inverse_transform([[scaled_pred]])[0][0]

        return jsonify({'predicted_price': float(prediction)})

    except Exception as e:
        print("❌ Backend Error:", e)
        return jsonify({'error': str(e)}), 500
    # Convert categorical variables if needed (depends on your preprocessing)
    # For example: encode strings into numbers if your model requires that)

if __name__ == '__main__':
    app.run(debug=True)
