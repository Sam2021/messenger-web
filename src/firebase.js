import firebase from "firebase";

const firebaseApp=firebase.initializeApp({
    
    apiKey: "AIzaSyCldHlVLXUywWW_8dHKyiPiPegrcMQKpv8",
    authDomain: "messengerweb-d87b5.firebaseapp.com",
    databaseURL: "https://messengerweb-d87b5.firebaseio.com",
    projectId: "messengerweb-d87b5",
    storageBucket: "messengerweb-d87b5.appspot.com",
    messagingSenderId: "293186044093",
    appId: "1:293186044093:web:316966baa101c8bccab7d4",
    measurementId: "G-Q71LFCF0NY"
});
const db =firebaseApp.firestore();

export default db;
