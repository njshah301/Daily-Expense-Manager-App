// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0qttRL5WK3y1XSdQ_G8Kc_kwoeJnifHU",
    authDomain: "daily-expense-manager-d6972.firebaseapp.com",
    projectId: "daily-expense-manager-d6972",
    storageBucket: "daily-expense-manager-d6972.appspot.com",
    messagingSenderId: "338252123155",
    appId: "1:338252123155:web:712cbd21a2a6925e5443e6",
    measurementId: "G-6NT2Q9XNM8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
