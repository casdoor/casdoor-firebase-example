import {initializeApp} from "firebase/app";

// The configuration of your Firebase web app, from the project settings in the Firebase console.
// The default is our demo project, which has Casdoor (https://door.casdoor.com) as the OpenID Connect provider "casdoor".
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
