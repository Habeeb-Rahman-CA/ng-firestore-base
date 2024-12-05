import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBRsUu9ogb-wJa8zebA8Pv0qUc7fCLu11E",
    authDomain: "ng-new-project-d58db.firebaseapp.com",
    projectId: "ng-new-project-d58db",
    storageBucket: "ng-new-project-d58db.firebasestorage.app",
    messagingSenderId: "479970380346",
    appId: "1:479970380346:web:a91832ad0698e545ee8303"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore()