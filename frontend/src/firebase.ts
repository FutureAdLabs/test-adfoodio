import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyAOx82eHb8-HLAM2wUVzIdKjujXSoVqe70",
    authDomain: "adfoodio.firebaseapp.com",
    projectId: "adfoodio",
    storageBucket: "adfoodio.appspot.com",
    messagingSenderId: "260416713883",
    appId: "1:260416713883:web:b0bafcbf1806d69a64823e"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
export const fireAuth = firebase.auth();
