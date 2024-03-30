// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhPhoRje4TVPy43O4vdKVFx7nrTVVDoRs",
  authDomain: "netflixgpt2-e6b7b.firebaseapp.com",
  projectId: "netflixgpt2-e6b7b",
  storageBucket: "netflixgpt2-e6b7b.appspot.com",
  messagingSenderId: "313332706236",
  appId: "1:313332706236:web:cf006aa7047bec928419b9",
  measurementId: "G-CHG6DNGZT5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export  const auth = getAuth(app);
