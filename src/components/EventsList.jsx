import React from 'react';

import ListItemContainer from '../containers/ListItemContainer';
import { listContainerStyle, listStyle, listItemStyle } from '../styles/javascript/listStyles';

const generateListItems = (events, onLocationSelect) => {
  return events.map(event => {
    return <ListItemContainer location={event} onLocationSelect={onLocationSelect} id={event.id} key={event.id} />;
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
