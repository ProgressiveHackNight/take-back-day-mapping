import React from 'react';

import ListItem from './ListItem.jsx';
import { listContainerStyle, listStyle, listItemStyle } from '../styles/javascript/listStyles';

const generateListItems = (events, onLocationSelect) => {
  return events.map(event => {
    return <ListItem name={event.name} address={event.location} onLocationSelect={onLocationSelect} id={event.id} />;
  });
};

const EventsList = ({ events, onLocationSelect }) => {
  return (
    <div style={listContainerStyle}>
      <ul style={listStyle}>{generateListItems(events, onLocationSelect)}</ul>
    </div>
  );
};

export default EventsList;
