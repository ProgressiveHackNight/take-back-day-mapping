import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './configureStore';

export const mountWithWrappers = (wrappedComponent, initialState = {}) => (
  mount(
    <MuiThemeProvider>
      <Provider store={configureStore(initialState)}>
        {wrappedComponent}
      </Provider>
    </MuiThemeProvider>,
  )
);
