// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9B-OdCgEUxm-IBMRgbzRSB9LIEWVHBuE",
  authDomain: "netflixgpt-5b36e.firebaseapp.com",
  projectId: "netflixgpt-5b36e",
  storageBucket: "netflixgpt-5b36e.firebasestorage.app",
  messagingSenderId: "871487431223",
  appId: "1:871487431223:web:49332c26ed0cc7075715b2",
  measurementId: "G-HMRQ5BF5FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();