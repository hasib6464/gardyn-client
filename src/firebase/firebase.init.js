// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABokvvJo4a4D-SKRCoIbzmFuYdulfdojs",
  authDomain: "gardyn-45f81.firebaseapp.com",
  projectId: "gardyn-45f81",
  storageBucket: "gardyn-45f81.firebasestorage.app",
  messagingSenderId: "738453240731",
  appId: "1:738453240731:web:00b738a66dad0fa8c9bf3e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
