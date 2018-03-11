import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './styles/css/index.css';
import configureStore from './configureStore';
import AppContainer from './containers/AppContainer';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
