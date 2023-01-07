// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: '${process.env.REACT_APP_API_KEY}',
    authDomain:'${project.env.REACT_APP_AUTH_DOMAIN}',
    projectId: '${project.env.REACT_APP_projectId}',
    storageBucket:'${project.env.REACT_APP_storageBucket}',
    messagingSenderId: '${project.env.REACT_APP_messagingSenderId}',
    appId:'${project.env.REACT_APP_appId}',
    measurementId: '${project.env.REACT_APP_measurementid}'
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
