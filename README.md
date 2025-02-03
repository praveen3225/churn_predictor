# Churn Predictor

## Overview
Churn Predictor is a web-based application that predicts customer churn based on user inputs. It consists of a simple form with 12 questions, and the responses are processed by a Flask backend integrated with a machine learning model. This project serves as an initial attempt to deploy an ML model in a backend environment.

## Technologies Used
- **Frontend:** React.js
- **Backend:** Flask (Python)
- **Machine Learning:** Jupyter Notebook (Python), GridSearchCV, MinMax Scaler, Pickle

## Features
- User-friendly web form with 12 input fields.
- Flask backend for handling user inputs and predicting churn probability.
- Machine learning model optimized using GridSearchCV.
- MinMax Scaler for normalizing user inputs.
- Results displayed as an alert message on the frontend.

## Project Structure
```
churn-predictor/
│── frontend/        # React.js frontend
│── backend/         # Flask backend
│── model/           # Jupyter Notebook and ML model files
│── requirements.txt # Dependencies for the Flask backend
│── README.md        # Project documentation
```

## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- Node.js & npm (for the React frontend)
- Python & pip (for the Flask backend)

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```sh
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```
3. Install dependencies:
   ```sh
   pip install -r requirements.txt
   ```
4. Run the Flask backend:
   ```sh
   python app.py
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React application:
   ```sh
   npm start
   ```

## How It Works
1. User fills out the form with 12 inputs.
2. Data is sent to the Flask backend.
3. Flask loads two pickle files:
   - **MinMax Scaler:** Normalizes input data.
   - **Best Algorithm Model:** Predicts churn probability.
4. Prediction result is sent back to the frontend and displayed as an alert message.

## Future Enhancements
- Improve UI/UX for better user experience.
- Store and visualize prediction results.
- Deploy the application using Docker.
- Implement authentication for user-specific predictions.

## Contributing
Feel free to open issues or submit pull requests if you'd like to improve this project!

## License
This project is licensed under the MIT License.
