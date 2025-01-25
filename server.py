from flask import Flask, render_template
from flask import request
from flask_cors import CORS
import pandas as pd
import numpy as np
import pickle
print(np.__version__)


app = Flask(__name__, static_folder='dist')
CORS(app)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    print(data)
    with open('/Users/ppraveen/Documents/ChurnPredictor/predictor_web/best_dt.pkl','rb')as file:
        dt = pickle.load(file) 
    with open('/Users/ppraveen/Documents/ChurnPredictor/predictor_web/minmax_scale.pkl','rb')as file:
        minmax = pickle.load(file) 
    features = [
        data.get('age',0),
        data.get('gender',0),
        data.get('tenureUsage',0),
        data.get('frequency',0),
        data.get('supportCalls',0),
        data.get('paymentDelay',0),
        data.get('subscriptionType',0),
        data.get('contractLength',0),
        data.get('totalSpend',0),
        data.get('lastInteraction',0),
    ]
    for i in range(len(features)):
        if features[i] == 'Female' or features[i] == 'Basic' or features[i] == 'Monthly':
            features[i] = 0
        elif features[i] == 'Male' or features[i] == 'Quarterly' or features[i] == 'Standard':
            features[i] = 1
        elif features[i] == 'Premium' or features[i] == 'Annual':
            features[i] = 2
    print(features)
    features_array = np.array(features).reshape(1, -1)
    scaled_features = minmax.transform(features_array)
    ans = dt.predict(scaled_features)
    return {"message": "Form submitted successfully!","prediction":int(ans[0])}, 200
    
if __name__ == '__main__':
    app.run(debug=True)
