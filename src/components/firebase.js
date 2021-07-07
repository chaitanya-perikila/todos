import firebase from 'firebase/app';

import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";

firebase.initializeApp({
  apiKey: "AIzaSyBiAu1GD82FPJSFyZIHQ8llU4UI-mUSeRk",
  authDomain: "todos-8eed6.firebaseapp.com",
  projectId: "todos-8eed6",
  storageBucket: "todos-8eed6.appspot.com",
  messagingSenderId: "786561593163",
  appId: "1:786561593163:web:2d7ed1606c802cf24002ce",
  measurementId: "G-JT1Y1TLBLX"
})

const auth = firebase.auth();
const db = firebase.firestore();
const functions = firebase.functions();

export default firebase;
export { db, auth, functions };