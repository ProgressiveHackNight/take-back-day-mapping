import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from '../../configureStore';
import AppContainer from '../AppContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={configureStore()}>
      <AppContainer />
    </Provider>,
    div);
  ReactDOM.unmountComponentAtNode(div);
});
