import firebase from "firebase";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD0J9MIlbm-ERTnDgzgBBQxhKZiWwdgdVE",
    authDomain: "rookas-facebook-app.firebaseapp.com",
    projectId: "rookas-facebook-app",
    storageBucket: "rookas-facebook-app.appspot.com",
    messagingSenderId: "534588445712",
    appId: "1:534588445712:web:868befde752cf2467ea695",
    measurementId: "G-B7W36Q7YW5"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export {db, storage};
