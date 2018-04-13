import React from "react";
import ReactAddToCalendar from 'react-add-to-calendar';

import { ctaButton } from "../styles/javascript/buttons";
import { event } from '../gateways/event';

const AddToCalendar = props => {
  return (
    <button style={{ ...ctaButton, outline: 'none', padding: '8px'}} className="reminder-button">
      <ReactAddToCalendar event={{ ...event, location: props.location || '' }} />
    </button>
  );
};

export default AddToCalendar;
