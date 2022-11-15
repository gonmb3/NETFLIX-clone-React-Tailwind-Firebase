import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyBFwYyLEdS5Gr1FgkuChlyJcRVc-kin5HA",
  authDomain: "netflix-react-firebase-615be.firebaseapp.com",
  projectId: "netflix-react-firebase-615be",
  storageBucket: "netflix-react-firebase-615be.appspot.com",
  messagingSenderId: "424019345761",
  appId: "1:424019345761:web:578dff057f1a7005410520"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);
