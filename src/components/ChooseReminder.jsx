import React from 'react';

import { modalButtonsContainer, modalButtonStyle, reminderText } from '../styles/javascript/modalStyles';

const ChooseReminder = ({ sectionStyle, textButtonClick, emailButtonClick }) => {
  return (
    <div style={sectionStyle}>
      <p style={reminderText}>What kind of reminder would you like to recieve?</p>
      <div style={modalButtonsContainer}>
        <button style={modalButtonStyle} onClick={textButtonClick}>
          text
        </button>
        <button style={modalButtonStyle} onClick={emailButtonClick}>
          email
        </button>
      </div>
    </div>
  );
};

export default ChooseReminder;
