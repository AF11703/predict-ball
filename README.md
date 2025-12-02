# Predict Ball
A web application written using React, Express, and FastAPI to predict NBA match outcomes based on recent team performance

This project is split into two main categories: Frontend (client), Backend (server, microservice)

## Frontend
The frontend is a Vite + React app that makes API calls to the backend in order to fetch recent team performance, as well as to run the prediction workflow.

## Backend
The backend is written with JavaScript using Node and Express. Most of the endpoints are defined with this stack, however, the ML model was trained in Python with scikit-learn so it was made available with a microservice design through a single FastAPI endpoint for running the prediction.

**Note:** The backend is currently not being hosted due to technical difficulties.

## Conclusion
The app is [available here](https://predict-ball.vercel.app/) and below is a preview of how the app works.

![Preview for Predict Ball]()
