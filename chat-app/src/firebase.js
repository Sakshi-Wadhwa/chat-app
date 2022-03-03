// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBj8QB0j8S1xVuP5vU2eBXQDtzbbVaQqv0",
  authDomain: "chat-app-d4d2b.firebaseapp.com",
  databaseURL:"http://chat-app-d4d2b.firebaseio.com",
  projectId: "chat-app-d4d2b",
  storageBucket: "chat-app-d4d2b.appspot.com",
  messagingSenderId: "994313064033",
  appId: "1:994313064033:web:50d1db516dcbae0067e420",
  measurementId: "G-SJ2RQ8FBK0"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebaseApp.firestore();
const storage= firebaseApp.storage();

  export { db,auth,storage};