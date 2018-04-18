import React from 'react';
import locationData from '../../locationdata';
import { mountWithWrappers } from '../../testHelpers';
import { toLocations } from '../../gateways/locations';
import Map from '../Map';

describe('Map', () => {
  it('renders without crashing', () => {
    const theLocations = toLocations(locationData);
    mountWithWrappers(
      <Map
        locations={theLocations}
        selectedMarker={theLocations[0].id}
        onLocationSelect={() => undefined}
        center={{ lat: 40.744679, lng: -73.948542 }}
      />,
      {locations: theLocations},
    );
  });
});
