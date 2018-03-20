import React from 'react';
import {
  infoWindowStyle,
  infoContainer,
  infoContent,
  infoText,
  plainButton,
  infoHeader,
  infoCloseButton,
} from '../styles/javascript/infoWindowStyles';

const InfoWindow = ({ location, onClick, onCloseClick }) => {
  return (
    <div style={infoWindowStyle}>
      <div style={infoContainer}>
        <div style={infoContent}>
          <div style={infoHeader}>
            <h4 style={infoText}>{location.name}</h4>
            <span style={infoCloseButton} onClick={onCloseClick}>
              &times;
            </span>
          </div>
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
