// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3manzlANnvF_qmyk-dIcAQ1IpI7qpRoo",
  authDomain: "dbobat-9e6c2.firebaseapp.com",
  projectId: "dbobat-9e6c2",
  storageBucket: "dbobat-9e6c2.firebasestorage.app",
  messagingSenderId: "130587069467",
  appId: "1:130587069467:web:0095e0646e40828653bcbe",
  measurementId: "G-6N23QK1MJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);