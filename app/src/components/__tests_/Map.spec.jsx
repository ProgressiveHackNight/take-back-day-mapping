import React from 'react';
import { mount } from 'enzyme';
import mockData from '../../mockData';
import Map from '../Map';

describe('Map', () => {
  it('renders without crashing', () => {
    const locations = mockData;

    mount(<Map
      locations={locations}
      selectedMarker={locations[0].id}
      onLocationSelect={() => undefined}
    />);
  });
});
