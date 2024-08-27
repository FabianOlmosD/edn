import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6OAVXqgwjke44PIyeij9_3BdxrC7XqHs",
  authDomain: "surge-56304.firebaseapp.com",
  projectId: "surge-56304",
  storageBucket: "surge-56304.appspot.com",
  messagingSenderId: "602362509471",
  appId: "1:602362509471:web:d6e7468edc20e37741caaa"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
