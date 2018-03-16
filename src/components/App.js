import React, { Component } from 'react';
import '../styles/css/App.css';
import Map from './Map.jsx';
import EventsListContainer from '../containers/EventsListContainer';
import SearchSection from './SearchSection.jsx';
import ModalContainer from '../containers/ModalContainer';

import { listSection } from '../styles/javascript/listStyles';

import mockData from '../mockData';

const defaultState = {
  locations: [],
  selectedLocationId: null,
  mapCenter: { lat: 40.744679, lng: -73.948542 },
};

class App extends Component {
  state = defaultState;

  componentDidMount() {
    this.setState(state => ({
      locations: mockData,
    }));
  }

  handleLocationSelect = selectedId => {
    this.setState(state => ({
      selectedLocationId: selectedId,
    }));
  };

  handleListSelect = selectedId => {
    const selectedLoc = this.state.locations.find(location => location.id == selectedId);
    if (selectedLoc) {
      this.setState(state => ({
        mapCenter: { lat: selectedLoc.lat, lng: selectedLoc.lon },
        selectedLocationId: selectedId,
      }));
    }
  };

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <Map
            locations={this.state.locations}
            selectedMarker={this.state.selectedLocationId}
            onLocationSelect={this.handleLocationSelect}
            center={this.state.mapCenter}
          />
          <div style={listSection}>
            <SearchSection />
            <EventsListContainer events={mockData} onLocationSelect={this.handleListSelect} />
          </div>
        </div>
        <ModalContainer visible={this.props.selectedLocation} onCloseClick={this.props.onCloseClick} />
      </div>
    );
  }
}

export default App;
