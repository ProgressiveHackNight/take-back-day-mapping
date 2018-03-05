import React, { Component } from 'react';
import '../../styles/App.css';
import Map from './Map.jsx';
import EventsList from './EventsList.jsx';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Map />
          <EventsList />
        </div>
      </div>
    );
  }
}

export default App;
