import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3rdKIk_WkP6oUwSn7QyCWBqAmt6LjFto",
  authDomain: "n-computacion.firebaseapp.com",
  projectId: "n-computacion",
  storageBucket: "n-computacion.appspot.com",
  messagingSenderId: "746576509878",
  appId: "1:746576509878:web:aefe0a8e4e81f4114b1f17",
};

const app = firebase.initializeApp(firebaseConfig);

export function getFireBase() {
  return app;
}

export function getFireStore() {
  return firebase.firestore(app);
}
