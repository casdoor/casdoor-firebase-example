// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDG8HGY9ULBqXPMIkYEdcOSm2_Yls1E5yY",
  authDomain: "fb-casdoor.firebaseapp.com",
  projectId: "fb-casdoor",
  storageBucket: "fb-casdoor.appspot.com",
  messagingSenderId: "174511522903",
  appId: "1:174511522903:web:8649d465718acfac900f12",
  measurementId: "G-8N504216FH"
};

export const app = initializeApp(firebaseConfig);