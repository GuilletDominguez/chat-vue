import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyA_S56n548ZFsFNjKKRvZiKdwv2e_2WllE",
    authDomain: "firechat-1f0dd.firebaseapp.com",
    projectId: "firechat-1f0dd",
    storageBucket: "firechat-1f0dd.appspot.com",
    messagingSenderId: "464246179223",
    appId: "1:464246179223:web:8eea27dcdb47b33c38f0d2"
}

const db = firebase.initializeApp(config);
export default db;