import React from "react";

import ListItemContainer from "../containers/ListItemContainer";
import { listStyle } from "../styles/javascript/listStyles";
import { MEDIUM_GRAY } from "../styles/javascript/colors";

const noLocations = {
  textAlign: "center",
  color: MEDIUM_GRAY,
  paddingTop: "15px",
};

const generateListItems = (locations, onLocationSelect) => {
  if (locations.length) {
    return locations.map(location => {
      return (
        <ListItemContainer
          location={location}
          onLocationSelect={onLocationSelect}
          id={location.id}
          key={location.id}
        />
      );
    });
  }
};

const LocationsList = ({ locations, onLocationSelect, onLocationsReturn }) => {
  if (locations.length !== 0) {
    onLocationsReturn(true);
    return (
      <div id="locations-list" className="list-container">
        <ul className="locations-list" style={listStyle}>
          {generateListItems(locations, onLocationSelect)}
        </ul>
      </div>
    );
  } else {
    onLocationsReturn(false);
    return (
      <div style={noLocations} className="list-container">
        <div id="no-results">No locations found.</div>
      </div>
    );
  }
};

export default LocationsList;
