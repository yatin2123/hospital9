// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZWRqwOGA__GATGoSTnGkLvYTLeoKAs28",
  authDomain: "hospital9-35146.firebaseapp.com",
  projectId: "hospital9-35146",
  storageBucket: "hospital9-35146.appspot.com",
  messagingSenderId: "938114717234",
  appId: "1:938114717234:web:4f7ec58753bfb63cefce2b",
  measurementId: "G-KTFMTH6VFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);