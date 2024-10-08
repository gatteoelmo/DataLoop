// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBaRUOMQwRM6BJOpwILFX4pHwaaOiOkruQ",
    authDomain: "snaply-8314f.firebaseapp.com",
    projectId: "snaply-8314f",
    storageBucket: "snaply-8314f.appspot.com",
    messagingSenderId: "584048904504",
    appId: "1:584048904504:web:02c0dfe7b3ed458484d9cd"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);