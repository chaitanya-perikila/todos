import firebase from 'firebase/app';

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

firebase.initializeApp({
  apiKey: "AIzaSyCQ0_q1aSWOjg1UOMawKTB2GP3Yc9Lw4dA",
  authDomain: "todo-list-2d0ff.firebaseapp.com",
  projectId: "todo-list-2d0ff",
  storageBucket: "todo-list-2d0ff.appspot.com",
  messagingSenderId: "685320277964",
  appId: "1:685320277964:web:140e64f6714fdea5179769",
  measurementId: "G-GNBN413MMW"

})

const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

export default firebase;
export { db, auth, functions };