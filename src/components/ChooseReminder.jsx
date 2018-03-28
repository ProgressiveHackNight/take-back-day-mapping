import React from 'react';

import { modalButtonsContainer, reminderText } from '../styles/javascript/modalStyles';
import { ctaButton } from '../styles/javascript/buttons';

const ChooseReminder = ({ sectionStyle, textButtonClick, emailButtonClick }) => {
  return (
    <div style={sectionStyle}>
      <p style={reminderText}>What kind of reminder would you like to recieve?</p>
      <div style={modalButtonsContainer}>
        <button style={ctaButton} onClick={textButtonClick}>
          text
        </button>
        <button style={ctaButton} onClick={emailButtonClick}>
          email
        </button>
      </div>
    </div>
  );
};

export default ChooseReminder;
