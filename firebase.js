// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import config from "./config"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: config.REACT_APP_FIREBASEKEY,
  authDomain: "native-tinder-ss.firebaseapp.com",
  projectId: "native-tinder-ss",
  storageBucket: "native-tinder-ss.appspot.com",
  messagingSenderId: "516864946729",
  appId: "1:516864946729:web:14a59d736162cee37c6238"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db =getFirestore();

export {auth, db}