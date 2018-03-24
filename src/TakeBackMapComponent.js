import React from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/css/index.css';
import configureStore from './configureStore';
import AppContainer from './containers/AppContainer';

const store = configureStore();

const TakeBackMapComponent = () => (
  <MuiThemeProvider>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </MuiThemeProvider>
);

export default TakeBackMapComponent;
