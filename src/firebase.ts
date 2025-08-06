import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGzwqfAEJLJSakQjbhbyn3Tf0HN7-KLAo",
  authDomain: "diako-9f413.firebaseapp.com",
  projectId: "diako-9f413",
  storageBucket: "diako-9f413.firebasestorage.app",
  messagingSenderId: "839499626614",
  appId: "1:839499626614:web:79d3410423ea01ed74c757",
  measurementId: "G-SNSSW9W72Y"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
