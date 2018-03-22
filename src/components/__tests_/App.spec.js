import React from 'react';
import { mountWithWrappers } from '../../testHelpers';
import App from '../App';
import Map from '../Map';


describe('App', () => {

  let wrapper;
  let fetchStub;

  beforeEach(() => {
    fetchStub = jest.fn();

    wrapper = mountWithWrappers(
      <App locations={[]} fetchLocations={fetchStub} />,
    );
  });

  it('renders fetches locations on mount', () => {
    expect(fetchStub).toHaveBeenCalled();
  });

  it('mounts map', () => {
    expect(wrapper.find(Map).length).toEqual(1);
  })
});

