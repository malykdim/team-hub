import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCxvERcQFORUNJXzyqgxceF9TOxyUNXQXM",
    authDomain: "team-hub-bb7bf.firebaseapp.com",
    projectId: "team-hub-bb7bf",
    storageBucket: "team-hub-bb7bf.appspot.com",
    messagingSenderId: "131494499535",
    appId: "1:131494499535:web:2b622721373c21f5cad3ba"
}

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };