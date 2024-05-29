// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhgyOFNtITFm13ixBkJmSEJns259yU9PA",
  authDomain: "quiz-app-with-login-naveen.firebaseapp.com",
  projectId: "quiz-app-with-login-naveen",
  storageBucket: "quiz-app-with-login-naveen.appspot.com",
  messagingSenderId: "841443375499",
  appId: "1:841443375499:web:43cc8cd87f8ff7d615578e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);