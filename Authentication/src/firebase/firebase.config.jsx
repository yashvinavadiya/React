import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvp7rfDlbxooy-SWCejn3TfnWr-6sfRWA",
  authDomain: "database-442cf.firebaseapp.com",
  projectId: "database-442cf",
  storageBucket: "database-442cf.firebasestorage.app",
  messagingSenderId: "17085464485",
  appId: "1:17085464485:web:f6bc0dc44f533d4046724c"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app)
export const GoogleAuth = new GoogleAuthProvider()