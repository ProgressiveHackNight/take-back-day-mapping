'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _firebase = require('firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = {
  apiKey: 'AIzaSyAGqSVpUm81B-KYs-cyKYq8XnLTbZ8HHJw',
  authDomain: 'takebackmap.firebaseapp.com',
  databaseURL: 'https://takebackmap.firebaseio.com',
  projectId: 'takebackmap',
  storageBucket: 'takebackmap.appspot.com',
  messagingSenderId: '257650412128'
}; // src/firebase.js


_firebase2.default.initializeApp(config);
exports.default = _firebase2.default;