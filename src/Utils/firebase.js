// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLhQRzen60-2XIHj8NLIdM52Cl51GH6FM",
  authDomain: "netflix-clone-bc1a5.firebaseapp.com",
  projectId: "netflix-clone-bc1a5",
  storageBucket: "netflix-clone-bc1a5.appspot.com",
  messagingSenderId: "749871477917",
  appId: "1:749871477917:web:31fecb97deeb09d99ad074",
  measurementId: "G-18H4HGR504"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();