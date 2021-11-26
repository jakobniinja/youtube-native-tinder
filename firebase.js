// Import the functions you need from the SDKs you need
import { getAuth } from "@firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0n-24pCsU0zf5Zj1KzAMr9eZXG3zuXv0",
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