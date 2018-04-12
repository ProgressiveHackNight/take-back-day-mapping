'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || 'AIzaSyAGqSVpUm81B-KYs-cyKYq8XnLTbZ8HHJw',
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN || 'takebackmap.firebaseapp.com',
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL || 'https://takebackmap.firebaseio.com',
  projectId: process.env.REACT_APP_FIREBASE_ID || 'takebackmap',
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET || 'takebackmap.appspot.com',
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID || '257650412128'
}; // src/firebase.js


_firebase2.default.initializeApp(config);
exports.default = _firebase2.default;