// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);