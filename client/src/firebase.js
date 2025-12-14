// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-e172d.firebaseapp.com",
  projectId: "mern-blog-e172d",
  storageBucket: "mern-blog-e172d.firebasestorage.app",
  messagingSenderId: "379293853458",
  appId: "1:379293853458:web:47d55c231b2cc7189475cb",
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
