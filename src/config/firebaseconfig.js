// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, deleteDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd-YyJBxrSUrQaY50EOsdQZm300H14fxE",
  authDomain: "task-13d4f.firebaseapp.com",
  projectId: "task-13d4f",
  storageBucket: "task-13d4f.appspot.com",
  messagingSenderId: "38975192375",
  appId: "1:38975192375:web:8e4e86d9855f917f1aaeb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);

export { database, collection, doc, deleteDoc };