// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2q_7tHKfn4PFprrVloGqZfAk7-xrWyUw",
  authDomain: "dentist-service-point.firebaseapp.com",
  projectId: "dentist-service-point",
  storageBucket: "dentist-service-point.appspot.com",
  messagingSenderId: "848105573966",
  appId: "1:848105573966:web:1950e5d9e3004e18d9bd1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
