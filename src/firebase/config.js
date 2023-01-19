import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-1CO2FASUa9AJKusi_brFSryRqT3lLAc",
  authDomain: "cooking-ninja-site-9045b.firebaseapp.com",
  projectId: "cooking-ninja-site-9045b",
  storageBucket: "cooking-ninja-site-9045b.appspot.com",
  messagingSenderId: "1047240570683",
  appId: "1:1047240570683:web:4c8adc387cbfc307fae91e",
  measurementId: "G-M5TC6GMEX5",
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize services
const projectFirestore = firebase.firestore();

export { projectFirestore };
