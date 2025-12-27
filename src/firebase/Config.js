
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyApPpKx46jl6Xuvv0HMOIONXYlt4TYiuZM",
  authDomain: "midusa-2026.firebaseapp.com",
  projectId: "midusa-2026",
  storageBucket: "midusa-2026.firebasestorage.app",
  messagingSenderId: "763246041030",
  appId: "1:763246041030:web:b172c2eb9351268b4cc4c7",
  measurementId: "G-LYX3L6N810"
}

const app = initializeApp(firebaseConfig)

export  const db = getFirestore(app);