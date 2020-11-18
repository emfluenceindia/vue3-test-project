import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDEHcK-Ttyc52hibEa2uEghu730TUscFD0",
    authDomain: "infotrek-c4257.firebaseapp.com",
    databaseURL: "https://infotrek-c4257.firebaseio.com",
    projectId: "infotrek-c4257",
    storageBucket: "infotrek-c4257.appspot.com",
    messagingSenderId: "708291471437",
    appId: "1:708291471437:web:eea9a24270b8f2720fd404"
};

firebase.default.initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig);

export default firebase;