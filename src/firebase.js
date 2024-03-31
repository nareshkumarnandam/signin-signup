// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6zqs9gD19Y1r7F8xKwC_fexgpxTYm3TM",
  authDomain: "authentication-f58a2.firebaseapp.com",
  projectId: "authentication-f58a2",
  storageBucket: "authentication-f58a2.appspot.com",
  messagingSenderId: "224538326572",
  appId: "1:224538326572:web:19dcb6dbe5be7242c60389",
  measurementId: "G-T5HEN98Y6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;