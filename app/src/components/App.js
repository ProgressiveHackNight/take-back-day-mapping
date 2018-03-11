import React, { Component } from 'react';
import '../styles/css/App.css';
import Map from './Map.jsx';
import EventsList from './EventsList.jsx';
import SearchSection from './SearchSection.jsx';

import mockData from '../mockData';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Map locations={mockData} />
          <div>
            <SearchSection />
            <EventsList events={mockData} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
