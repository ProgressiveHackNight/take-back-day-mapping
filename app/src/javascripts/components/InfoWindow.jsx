import React from 'react';
import { infoWindowStyle } from '../styles/infoWindowStyles';

const InfoWindow = ({ description }) => {
  return <div style={infoWindowStyle}>{description}</div>;
};

export default InfoWindow;
