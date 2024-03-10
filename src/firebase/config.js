import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAud3Uh3zJD-6aW7ikCi3KKhXlmqq6A_bs",
  authDomain: "vue-blog-system-f36b1.firebaseapp.com",
  projectId: "vue-blog-system-f36b1",
  storageBucket: "vue-blog-system-f36b1.appspot.com",
  messagingSenderId: "612649361810",
  appId: "1:612649361810:web:6509099173781e5970e14b"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let db = firebase.firestore()

let timestamp = firebase.firestore.FieldValue.serverTimestamp

export {db, timestamp}