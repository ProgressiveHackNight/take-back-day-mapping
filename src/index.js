import React from 'react';
import { render } from 'react-dom';
import './styles/css/index.css';
import registerServiceWorker from './registerServiceWorker';
import TakeBackMapComponent from './TakeBackMapComponent';

render(
  <TakeBackMapComponent />,
  document.getElementById('root')
);

registerServiceWorker();
