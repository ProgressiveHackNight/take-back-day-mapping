import React from 'react';
import { successIcon, successSection } from '../styles/javascript/modalStyles';

const noteStyle = {
  textAlign: 'center',
  color: 'gray',
  fontSize: 14,
  marginBottom: 25,
  marginTop: 30,
  maxWidth: 350,
};

const ReminderSuccess = ({visible, type}) => {
  if(visible) {
    return (
      <div style={successSection}>
        <div style={successIcon}></div>
        <p style={noteStyle}>
          All set!<br/>
          We'll send you a reminder on Take Back Day.
        </p>
      </div>
    );
  };
  return '';
};

export default ReminderSuccess;
