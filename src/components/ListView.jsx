import React from 'react';

import SearchSection from './SearchSection';
import LocationsListContainer from '../containers/LocationsListContainer';

const ListView = ({ locations, onLocationSelect }) => {
  return (
    <div className="locations-list-view">
      <SearchSection />
      <LocationsListContainer events={locations} onLocationSelect={onLocationSelect} />
    </div>
  );
}

export default ListView;
