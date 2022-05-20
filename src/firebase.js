import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"


const firebaseConfig = {  
  apiKey: "AIzaSyC6ZESrEqLorRvUUsKbUcrXN8r47aWt1m4",
  authDomain: "safe-zone-backup.firebaseapp.com",
  databaseURL: "https://safe-zone-backup-default-rtdb.firebaseio.com",
  projectId: "safe-zone-backup",
  storageBucket: "safe-zone-backup.appspot.com",
  messagingSenderId: "907993750058",
  appId: "1:907993750058:web:85f5733c133e43fab68153",
  measurementId: "G-77N1Z5QW34"
};
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()