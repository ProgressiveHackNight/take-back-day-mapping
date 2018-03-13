import React from 'react';
import {
  infoWindowStyle,
  infoContainer,
  infoContent,
  infoText,
  rsvpButton,
} from '../styles/javascript/infoWindowStyles';

const InfoWindow = ({ description, address, onClick }) => {
  return (
    <div style={infoWindowStyle}>
      <div style={infoContainer}>
        <div style={infoContent}>
          <p style={infoText}>{description}</p>
          <p style={infoText}>{address}</p>
        </div>
        <button style={rsvpButton} onClick={onClick}>
          Rsvp
        </button>
      </div>
    </div>
  );
};

export default InfoWindow;
