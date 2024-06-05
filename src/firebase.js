
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {

    apiKey: "AIzaSyB6IJDncmTwT98p6C3uQI68wB2M7Pqua0I",
  
    authDomain: "reactjs-eb963.firebaseapp.com",
  
    projectId: "reactjs-eb963",
  
    storageBucket: "reactjs-eb963.appspot.com",
  
    messagingSenderId: "910286672918",
  
    appId: "1:910286672918:web:2285376a89678b2dde9137"
  
  };
  
  
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const app = initializeApp(firebaseConfig);
  
  export { auth ,app};