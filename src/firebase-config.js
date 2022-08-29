// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5_9EaWvDOvkjpo4QXDJV9Ww0INVgVIxQ",
  authDomain: "fridgefy-assignment.firebaseapp.com",
  projectId: "fridgefy-assignment",
  storageBucket: "fridgefy-assignment.appspot.com",
  messagingSenderId: "542058726551",
  appId: "1:542058726551:web:4a77a9bc323360910795d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();