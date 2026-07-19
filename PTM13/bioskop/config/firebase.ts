// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNn2o7vk0jolOw38prJzkyirkltGkyBvY",
  authDomain: "bioskop-f3208.firebaseapp.com",
  projectId: "bioskop-f3208",
  storageBucket: "bioskop-f3208.firebasestorage.app",
  messagingSenderId: "966063490462",
  appId: "1:966063490462:web:f0effa7c4d6c86f21b028f",
  measurementId: "G-JWQ48MESLV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);