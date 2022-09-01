// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdhW8WR3Cfo_ZOsUGUQGMDT0731GXF6E8",
  authDomain: "fridgefy-project.firebaseapp.com",
  projectId: "fridgefy-project",
  storageBucket: "fridgefy-project.appspot.com",
  messagingSenderId: "833037880722",
  appId: "1:833037880722:web:110db550e61d462c3cc54b",
  measurementId: "G-TY3DWW4KNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);