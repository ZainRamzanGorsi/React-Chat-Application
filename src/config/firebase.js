import firebase from 'fireabse/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCzMAyEw1wNf1iAt6aPx_dhiH2mJtB_eXM",
    authDomain: "database-cc4e2.firebaseapp.com",
    databaseURL: "https://database-cc4e2-default-rtdb.firebaseio.com",
    projectId: "database-cc4e2",
    storageBucket: "database-cc4e2.appspot.com",
    messagingSenderId: "661155440932",
    appId: "1:661155440932:web:ef2370be6c71a947e9ebb1",
    measurementId: "G-P55BL0QPG4"
};
firebase.initializeApp(firebaseConfig)
export default firebase;