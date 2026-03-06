// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_JwCprolnzdlGsJQyHp7s9ZUfFXUVAI4",
  authDomain: "cropwise-a713d.firebaseapp.com",
  projectId: "cropwise-a713d",
  storageBucket: "cropwise-a713d.firebasestorage.app",
  messagingSenderId: "1080249763235",
  appId: "1:1080249763235:web:bdcdebca71df7e60890616",
  measurementId: "G-YH7DMJZ9K6"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;