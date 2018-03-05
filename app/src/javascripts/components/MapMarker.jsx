import React, { Component, PropTypes } from 'react';
import { mapMarkerStyle } from '../styles/mapMarkerStyles';

const MapMarker = ({ text }) => {
  return <div style={mapMarkerStyle} text={text} />;
};

export default MapMarker;
