'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var checkIcon = require('./svgs/check.svg');

var modal = (_modal = {
  display: 'block',
  position: 'fixed',
  zIndex: '1',
  left: '0',
  top: '0',
  width: '100%',
  overflow: 'auto',
  backgroundColor: 'rgb(0,0,0)'
}, _defineProperty(_modal, 'backgroundColor', 'rgba(0,0,0,0.4)'), _defineProperty(_modal, 'height', '100%'), _modal);

var closeButtonWrapper = {
  alignSelf: 'flex-end',
  marginTop: '15px',
  marginRight: '15px'
};

var closeButton = {
  fontSize: '16px',
  backgroundColor: '#C2C2C2',
  height: '30px',
  width: '30px',
  borderRadius: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white'
};

var modalButtonsContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginTop: 15,
  marginBottom: 10
};

var modalButtonStyle = {
  backgroundColor: '#69C109',
  color: 'white',
  borderRadius: '22.5px',
  height: '40px',
  width: '122px',
  fontFamily: 'Avenir',
  fontSize: '18px',
  fontWeight: 'bold',
  border: 'none'
};

var modalAddressStyles = {
  color: '#4B4B4B',
  fontSize: 18,
  fontFamily: 'Avenir',
  fontWeight: 'bold'
};

var reminderText = {
  marginBottom: 30,
  color: '#4B4B4B',
  fontSize: '16px'
};

var TextReminderWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

var plainButton = {
  background: 'none',
  color: 'black',
  textDecoration: 'underline',
  fontWeight: 'bold',
  border: 'none',
  margin: 0,
  padding: 0,
  display: 'block'
};

var successIcon = {
  backgroundImage: 'url(' + checkIcon + ')',
  backgroundPosition: 'center center no-repeat',
  backgroundSize: 'cover',
  height: 100,
  width: 100
};

var successSection = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
};

exports.modal = modal;
exports.closeButton = closeButton;
exports.closeButtonWrapper = closeButtonWrapper;
exports.plainButton = plainButton;
exports.modalButtonsContainer = modalButtonsContainer;
exports.modalButtonStyle = modalButtonStyle;
exports.modalAddressStyles = modalAddressStyles;
exports.reminderText = reminderText;
exports.TextReminderWrapper = TextReminderWrapper;
exports.successIcon = successIcon;
exports.successSection = successSection;