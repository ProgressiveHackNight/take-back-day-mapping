import React from 'react';
import {
  infoWindowStyle,
  infoContainer,
  infoContent,
  infoText,
  plainButton,
} from '../styles/javascript/infoWindowStyles';

const InfoWindow = ({ location, onClick }) => {
  return (
    <div style={infoWindowStyle}>
      <div style={infoContainer}>
        <div style={infoContent}>
          <p style={infoText}>{location.name}</p>
          <p style={infoText}>{location.location}</p>
        </div>

        <button style={plainButton} onClick={onClick}>
          get reminder
        </button>
      </div>
    </div>
  );
};

export default InfoWindow;
