import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "MASUKKAN_API_KEY",
  authDomain: "MASUKKAN_AUTH_DOMAIN",
  projectId: "MASUKKAN_PROJECT_ID",
  storageBucket: "MASUKKAN_STORAGE_BUCKET",
  messagingSenderId: "MASUKKAN_MESSAGING_ID",
  appId: "MASUKKAN_APP_ID",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);