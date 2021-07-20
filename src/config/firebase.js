import firebase from 'fireabse/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCTmkwg26TkTsk3RtEBKVeBu_3dsWweALg",
  authDomain: "react-chat-application-18822.firebaseapp.com",
  projectId: "react-chat-application-18822",
  storageBucket: "react-chat-application-18822.appspot.com",
  messagingSenderId: "1036475447455",
  appId: "1:1036475447455:web:f62dca4af62839987d0aaa",
  measurementId: "G-62J461G4CK"
};

firebase.initializeApp(firebaseConfig)
export default firebase;