import React from 'react';

const bold = { fontWeight: 'bold' }

const displayReminderType = state => {
  if(state.phoneButtonClicked) {
    return <span style={bold}>text</span>
  } else if(state.emailButtonClicked) {
    return <span style={bold}>email</span>
  }
  return '';
}

export default displayReminderType;
