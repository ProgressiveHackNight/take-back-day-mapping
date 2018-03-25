import React from 'react';

import ListItemContainer from '../containers/ListItemContainer';
import { listStyle, listItemStyle } from '../styles/javascript/listStyles';

const generateListItems = (events, onLocationSelect) => {
  return events.map(event => {
    return <ListItemContainer location={event} onLocationSelect={onLocationSelect} id={event.id} key={event.id} />;
  });
};

const LocationsList = ({ events, onLocationSelect }) => {
  return (
    <div className="list-container">
      <ul className="locations-list" style={listStyle}>{generateListItems(events, onLocationSelect)}</ul>
    </div>
  );
};

export default LocationsList;
