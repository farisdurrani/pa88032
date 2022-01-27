// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyGdXnBKO-Aj8gv47eaZsI398PUHyn7X4",
  authDomain: "pa88032-6c7b5.firebaseapp.com",
  projectId: "pa88032-6c7b5",
  storageBucket: "pa88032-6c7b5.appspot.com",
  messagingSenderId: "103810395249",
  appId: "1:103810395249:web:c660181221d59489b1ffd0"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}

const auth = firebase.auth()

export { auth };