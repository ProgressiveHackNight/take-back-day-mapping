import React, { Component } from 'react';
import '../../styles/App.css';
import Map from './Map.jsx';
import EventsList from './EventsList.jsx';

import mockData from '../../mockData';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Map locations={mockData} />
          <EventsList events={mockData} />
        </div>
      </div>
    );
  }
}

export default App;
