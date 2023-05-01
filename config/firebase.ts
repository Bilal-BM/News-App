import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCFMLyiqDyb8ITfhPk7LqEjxtuSgL_xKVI",
  authDomain: "news-b6e6a.firebaseapp.com",
  databaseURL: "https://news-b6e6a-default-rtdb.firebaseio.com",
  projectId: "news-b6e6a",
  storageBucket: "news-b6e6a.appspot.com",
  messagingSenderId: "231762791935",
  appId: "1:231762791935:web:0195d53d34acebf9a8abca",
  measurementId: "G-S8DN2NZ6TY"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }



// export const auth = firebase.auth();



const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);





export { db, storage, auth,  createUserWithEmailAndPassword, signInWithEmailAndPassword, firebase, getFirestore, firebaseConfig };

