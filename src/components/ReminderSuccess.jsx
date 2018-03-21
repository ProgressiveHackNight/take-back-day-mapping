import React from 'react';
import { successIcon, successSection } from '../styles/javascript/modalStyles';

const noteStyle = {
  textAlign: 'center',
  color: 'gray',
  fontSize: 14,
  marginBottom: 25,
  marginTop: 30,
};

const ReminderSuccess = ({visible, type}) => {
  console.log('visible', visible)
  if(visible) {
    console.log('inside visible')
    return (
      <div style={successSection}>
        <div style={successIcon}></div>
        <p style={noteStyle}>
          We'll send you a {type} reminder on Take Back Day with this address and drop-off instructions
        </p>
      </div>
    );
  };
  return '';
};

export default ReminderSuccess;
