import React from 'react';
import { infoWindowStyle,infoContainer, infoContent, infoText, rsvpButton } from '../styles/javascript/infoWindowStyles';

const InfoWindow = ({...props}) => {
  const {description, address} = props;
  return (
  	<div style={infoWindowStyle}>
  	  <div style={infoContainer}>
  	  	<div style={infoContent}>
  	      <p style={infoText}>{description}</p>
  	      <p style={infoText}>{address}</p>
  	    </div>
  	    <button style={rsvpButton}>Rsvp</button>
  	  </div>
  	</div>
  	);
};

export default InfoWindow;
