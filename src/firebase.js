// src/firebase.js
import firebase from 'firebase';
const config = {
  apiKey: process.env.FIREBASE_API_KEY || 'AIzaSyAGqSVpUm81B-KYs-cyKYq8XnLTbZ8HHJw',
  authDomain: process.env.FIREBASE_DOMAIN || 'takebackmap.firebaseapp.com',
  databaseURL: process.env.FIREBASE_DB_URL || 'https://takebackmap.firebaseio.com',
  projectId: process.env.FIREBASE_ID || 'takebackmap',
  storageBucket: process.env.FIREBASE_BUCKET || 'takebackmap.appspot.com',
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID || '257650412128',
};

firebase.initializeApp(config);
export default firebase;
