// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore , collection, doc} from "firebase/firestore";



import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwwLv2e_ooq1r704mWTUD-zLivzwojEdk",
  authDomain: "webshop-4660a.firebaseapp.com",
  projectId: "webshop-4660a",
  storageBucket: "webshop-4660a.appspot.com",
  messagingSenderId: "369741705731",
  appId: "1:369741705731:web:67ff9122da503bea901436",
  measurementId: "G-BZ3XF75VE1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
const analytics = getAnalytics(app);
export const db2 = getFirestore();
