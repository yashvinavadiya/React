
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyD0YF7h2SdsNm8g-ST6STg1uyAVfgXK5ts",
  authDomain: "fir-curd-aa1d4.firebaseapp.com",
  projectId: "fir-curd-aa1d4",
  storageBucket: "fir-curd-aa1d4.firebasestorage.app",
  messagingSenderId: "94409334832",
  appId: "1:94409334832:web:b9adb3fe007492f33a0df5"
};

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export { db };