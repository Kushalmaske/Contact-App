// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2IOGjtLCcn14khlACQ7G-BhTnV5a-itg",
  authDomain: "vite-contact-369c5.firebaseapp.com",
  projectId: "vite-contact-369c5",
  storageBucket: "vite-contact-369c5.appspot.com",
  messagingSenderId: "1064891064178",
  appId: "1:1064891064178:web:7b8c7904b8d82abd5e07eb",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
