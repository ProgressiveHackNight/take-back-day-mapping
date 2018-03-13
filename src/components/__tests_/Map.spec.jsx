import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import mockData from '../../mockData';
import configureStore from '../../configureStore';
import Map from '../Map';

describe('Map', () => {
  it('renders without crashing', () => {
    const locations = mockData;

    mount(
      <Provider store={configureStore()}>
        <Map
          locations={locations}
          selectedMarker={locations[0].id}
          onLocationSelect={() => undefined}
        />
      </Provider>
    );
  });
});
