// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpS-3jPxTbw6R0Hy3zolErJ6NZ2sNwNMw",
  authDomain: "again-practise-moha-milon-auth.firebaseapp.com",
  projectId: "again-practise-moha-milon-auth",
  storageBucket: "again-practise-moha-milon-auth.firebasestorage.app",
  messagingSenderId: "821740194529",
  appId: "1:821740194529:web:7ede6502fe2223bd3805a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);