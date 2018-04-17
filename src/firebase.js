// src/firebase.js
import firebase from 'firebase';
const config = {
  apiKey: 'AIzaSyAGqSVpUm81B-KYs-cyKYq8XnLTbZ8HHJw',
  authDomain: 'takebackmap.firebaseapp.com',
  databaseURL: 'https://takebackmap.firebaseio.com',
  projectId: 'takebackmap',
  storageBucket: 'takebackmap.appspot.com',
  messagingSenderId: '257650412128',
};

firebase.initializeApp(config);
export default firebase;
