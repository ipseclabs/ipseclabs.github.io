// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "ipsec-landing.firebaseapp.com",
  projectId: "ipsec-landing",
  storageBucket: "ipsec-landing.appspot.com",
  messagingSenderId: "1025351317465",
  appId: "1:1025351317465:web:68dba84eacf5c85e3b8bc8",
  measurementId: "G-LRJ14H9H2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export {db}