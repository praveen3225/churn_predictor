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


## Setup Instructions
### Prerequisites
Ensure you have the following installed:
- Node.js & npm (for the React frontend)
- Python & pip (for the Flask backend)
- also make sure to run the server.py once and download all the necessary libraries such as flask, cors.etc 

## Procedure
1. Run the server.py (Flask Backend):
   ```sh
   python server.py
   ```
2. Now run the front-end react program.
   ```sh
   npm run dev
   ```
3. Now the web app would be rendered with a form consisting of several fields for user to input in.
4. After filling the form with the input, click submit.
5. The submit would take the input from the front-end, would be processed by the ML algorithm in the backend, and would return a message in the alert form in the screen.
 
## Future Enhancements
- Improve UI/UX for better user experience.
- Store and visualize prediction results.
- Deploy the application using Docker.
- Implement authentication for user-specific predictions.

## Contributing
Feel free to open issues or submit pull requests if you'd like to improve this project!

## License
This project is licensed under the MIT License.
