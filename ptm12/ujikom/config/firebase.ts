// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIVpmm-vvVJzGOf51-XnySeGvjLMaAeRE",
  authDomain: "ujikom-d42d0.firebaseapp.com",
  projectId: "ujikom-d42d0",
  storageBucket: "ujikom-d42d0.firebasestorage.app",
  messagingSenderId: "302130240833",
  appId: "1:302130240833:web:b958c4d03c3784be7455c0",
  measurementId: "G-ZJBXJJ46T0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app);