// firebaseConfig.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // Import getStorage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAisu779bxAZ7My38_mS1G1aN9siyYllA8",
  authDomain: "interdimensional-comedy.firebaseapp.com",
  projectId: "interdimensional-comedy",
  storageBucket: "interdimensional-comedy.appspot.com",
  messagingSenderId: "625595023080",
  appId: "1:625595023080:web:a45ccf20c8c99e54c4135d",
  measurementId: "G-5VP01SW7SL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get instances
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app); // Ensure this is exported
