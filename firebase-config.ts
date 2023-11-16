// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD94n5T8XfPb5dodwTwCMZRchxmtOnYmbE",
  authDomain: "examdatabase-81ff4.firebaseapp.com",
  projectId: "examdatabase-81ff4",
  storageBucket: "examdatabase-81ff4.appspot.com",
  messagingSenderId: "927904422049",
  appId: "1:927904422049:web:c0871fbc8c8b35acfa38e0",
  measurementId: "G-CT1Y7S91Y2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()
