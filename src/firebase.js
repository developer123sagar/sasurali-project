import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1myn7bBptCvmg4uIoZ3PHVuqKUUFg18k",
  authDomain: "sasurali-216d9.firebaseapp.com",
  databaseURL: "https://sasurali-216d9-default-rtdb.firebaseio.com",
  projectId: "sasurali-216d9",
  storageBucket: "sasurali-216d9.appspot.com",
  messagingSenderId: "526748160258",
  appId: "1:526748160258:web:4ee69c1492f7f81026721b"
};

export const app = initializeApp(firebaseConfig);
export const imgDb = getStorage(app);
export const db = getFirestore(app);
export const admin = collection(db, "adminDetail");
export const food = collection(db, "foodDetail");
export const specialFood = collection(db, "foodItem");
export const chef = collection(db, "chefDetail");
export const blog = collection(db, "blogDetail");
export const termCond = collection(db, "Term&cond");




