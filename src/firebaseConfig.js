// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYtP0SUgbr-5LO_mTjcYg86cgfJDCT990",
  authDomain: "linkdin-clone-b975f.firebaseapp.com",
  projectId: "linkdin-clone-b975f",
  storageBucket: "linkdin-clone-b975f.appspot.com",
  messagingSenderId: "883942633174",
  appId: "1:883942633174:web:8cafec3aac63259f6fe377",
  measurementId: "G-31346XH5XD",
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


export { app, auth, analytics, firestore, storage };
