import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './styles/css/index.css';
import configureStore from './configureStore';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);

registerServiceWorker();
