import React, { Component } from 'react';
import '../styles/css/App.css';
import Map from './Map.jsx';
import EventsList from './EventsList.jsx';
import SearchSection from './SearchSection.jsx';

import mockData from '../mockData';

const defaultState = {
  locations: [],
  selectedLocationId: null,
};

class App extends Component {
  state = defaultState;

  componentDidMount() {
    this.setState(state => ({
      locations: mockData,
    }));
  }

  handleLocationSelect = (selectedId) => {
    this.setState(state => ({
      selectedLocationId: selectedId,
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Map
            locations={this.state.locations}
            selectedMarker={this.state.selectedLocationId}
            onLocationSelect={this.handleLocationSelect}
          />
          <div>
            <SearchSection />
            <EventsList
              events={this.state.locations}
              onLocationSelect={this.handleLocationSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
