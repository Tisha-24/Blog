// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOiTSVq7f-ErtePpGZ0XXeO9-OePc3idI",
  authDomain: "blog-a5911.firebaseapp.com",
  projectId: "blog-a5911",
  storageBucket: "blog-a5911.appspot.com",
  messagingSenderId: "620446860845",
  appId: "1:620446860845:web:9bdd33d58f0b0fdf7c9aa4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDb = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { fireDb, auth, storage };
