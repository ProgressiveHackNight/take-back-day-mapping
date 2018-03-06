import React from 'react';
import { infoWindowStyle } from '../styles/mapMarkerStyles';

const InfoWindow = ({ description }) => {
  return <div style={infoWindowStyle}>{description}</div>;
};

export default InfoWindow;
