 import { initializeApp } from "firebase/app";
 import { GoogleAuthProvider, getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA4X9UB3M6NYP4xyc9PrwrUHO_4iX_Snpo",
  authDomain: "video-8798d.firebaseapp.com",
  projectId: "video-8798d",
  storageBucket: "video-8798d.appspot.com",
  messagingSenderId: "234146335178",
  appId: "1:234146335178:web:7011b5a4bb035c10c3a733"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
export const  auth = getAuth()
 
export  const provider = new GoogleAuthProvider()

export default app