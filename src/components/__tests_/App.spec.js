import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from '../../configureStore';
import App from '../App';
import Map from '../Map';


describe('App', () => {

  let wrapper;
  let fetchStub;

  beforeEach(() => {
    fetchStub = jest.fn();

    wrapper = mount(
      <Provider store={configureStore()}>
        <App locations={[]} fetchLocations={fetchStub} />
      </Provider>,
    );
  });

  it('renders fetches locations on mount', () => {
    expect(fetchStub).toHaveBeenCalled();
  });

  it('mounts map', () => {
    expect(wrapper.find(Map).length).toEqual(1);
  })
});

