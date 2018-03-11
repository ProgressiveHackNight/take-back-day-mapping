import React from 'react';
import { infoWindowStyle } from '../styles/javascript/infoWindowStyles';

const InfoWindow = ({ description }) => {
  return <div style={infoWindowStyle}>{description}</div>;
};

export default InfoWindow;
