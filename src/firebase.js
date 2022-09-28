import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-TenO3hylPBTzBGNBHESJvReY1zMBRo4",
  authDomain: "clone-c4b67.firebaseapp.com",
  projectId: "clone-c4b67",
  storageBucket: "clone-c4b67.appspot.com",
  messagingSenderId: "1081439615133",
  appId: "1:1081439615133:web:e3c9b37ac5296b0cfdfc74",
  measurementId: "G-QB78RDGPFK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
