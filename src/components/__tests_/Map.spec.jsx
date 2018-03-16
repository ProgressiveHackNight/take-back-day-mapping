import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockData from '../../mockData';
import configureStore from '../../configureStore';
import { toLocations } from '../../gateways/locations';
import Map from '../Map';

describe('Map', () => {
  it('renders without crashing', () => {
    const fakeLocations = toLocations(mockData);
    mount(
      <Provider store={configureStore({locations: fakeLocations})}>
        <Map
          locations={fakeLocations}
          selectedMarker={fakeLocations[0].id}
          onLocationSelect={() => undefined}
          center={{ lat: 40.744679, lng: -73.948542 }}
        />
      </Provider>
    );
  });
});
