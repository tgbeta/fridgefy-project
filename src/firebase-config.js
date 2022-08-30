// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdWHwEK2Im3NbdQfTD6CbtSqStecPlhD0",
  authDomain: "fridgefy-assignment-b2310.firebaseapp.com",
  projectId: "fridgefy-assignment-b2310",
  storageBucket: "fridgefy-assignment-b2310.appspot.com",
  messagingSenderId: "964041458294",
  appId: "1:964041458294:web:6f79a3be147c69b9d05557"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();