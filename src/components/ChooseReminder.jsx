import React from 'react';

import { modalButtonsContainer, reminderText } from '../styles/javascript/modalStyles';
import { ctaButton } from '../styles/javascript/buttons';
import AddToCalendar from './AddToCalendar';

const ChooseReminder = ({ sectionStyle, textButtonClick, emailButtonClick, location }) => {
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
      <AddToCalendar location={location}/>
    </div>
  );
};

export default ChooseReminder;
