import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCShpGLGf7oGVceL6-Mwhjpa6kMi2aW0kI",
  authDomain: "coderhouse-ecommerce-5a000.firebaseapp.com",
  projectId: "coderhouse-ecommerce-5a000",
  storageBucket: "coderhouse-ecommerce-5a000.appspot.com",
  messagingSenderId: "508415434373",
  appId: "1:508415434373:web:4e569c1db1eeb914f893ec"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <>
    <App />
  </>,
  document.getElementById('root')
);

