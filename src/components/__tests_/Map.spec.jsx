import React from 'react';
import mockData from '../../mockData';
import { mountWithWrappers } from '../../testHelpers';
import { toLocations } from '../../gateways/locations';
import Map from '../Map';

describe('Map', () => {
  it('renders without crashing', () => {
    const fakeLocations = toLocations(mockData);
    mountWithWrappers(
      <Map
        locations={fakeLocations}
        selectedMarker={fakeLocations[0].id}
        onLocationSelect={() => undefined}
        center={{ lat: 40.744679, lng: -73.948542 }}
      />,
      {locations: fakeLocations},
    );
  });
});
