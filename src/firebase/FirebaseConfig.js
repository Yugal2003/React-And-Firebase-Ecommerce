// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRpykMVVraMNd7-zjIzOoQmQeRDAih3nU",
  authDomain: "myecommerce-71c19.firebaseapp.com",
  projectId: "myecommerce-71c19",
  storageBucket: "myecommerce-71c19.firebasestorage.app",
  messagingSenderId: "275088579036",
  appId: "1:275088579036:web:646c7fa07126baf39c1719"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB,auth}