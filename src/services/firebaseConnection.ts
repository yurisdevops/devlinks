// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBmZDAnbcU6KGAXjTR4EvzvV_hYlOeMnAs",
  authDomain: "devlinks-31f79.firebaseapp.com",
  projectId: "devlinks-31f79",
  storageBucket: "devlinks-31f79.appspot.com",
  messagingSenderId: "830295682659",
  appId: "1:830295682659:web:3203bf492eaca58bea5256",
  measurementId: "G-B6X8V2XLDG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
