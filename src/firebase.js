import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyAJY_1HRRX3QtiGohbHZwIpnxyxxRg_UKg",
  authDomain: "chat-app-daa67.firebaseapp.com",
  databaseURL: "https://chat-app-daa67.firebaseio.com",
  projectId: "chat-app-daa67",
  storageBucket: "chat-app-daa67.appspot.com",
  messagingSenderId: "395621616179",
  appId: "1:395621616179:web:592fe1184eab60f849f146",
  measurementId: "G-FC8DGW0TTD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;
