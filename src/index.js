import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBtcoCKJM2nDr-UnZD_yw2FRD33e5mZkc",
  authDomain: "love-marathon.firebaseapp.com",
  projectId: "love-marathon",
  storageBucket: "love-marathon.appspot.com",
  messagingSenderId: "71807067675",
  appId: "1:71807067675:web:c4d561a07d25edf4633abe",
  measurementId: "G-53ZBSJQFYJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export { app };
