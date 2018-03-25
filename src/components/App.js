import React, { Component } from 'react';
import '../styles/css/App.css';
import Map from './Map';
import ListView from './ListView';
import ModalContainer from '../containers/ModalContainer';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import { listSection } from '../styles/javascript/listStyles';

const defaultState = {
  selectedLocationId: null,
  mapCenter: { lat: 40.744679, lng: -73.948542 },
  selectedMobileView: 'map & list',
  isInMobileSize: null,
};

class App extends Component {
  state = defaultState;

  componentDidMount() {
    this.props.fetchLocations();

    this.setState(state => ({
      isInMobileSize: window.innerWidth < 765 ? true : false,
    }))

    this.resizeListener = window.addEventListener('resize', () => {
      this.handleScreenSizeChange();
    })
  }

  handleScreenSizeChange = e => {
    const screenWidth = window.outerWidth;
    const isMobile = screenWidth < 765 ? true : false;

    this.setState(state => ({
      isInMobileSize: isMobile,
    }));
  }

  handleLocationSelect = selectedId => {
    this.setState(state => ({
      selectedLocationId: selectedId,
    }));
  };

  handleListSelect = selectedId => {
    const selectedLoc = this.props.locations.find(location => location.id == selectedId);
    if (selectedLoc) {
      this.setState(state => ({
        mapCenter: { lat: selectedLoc.lat, lng: selectedLoc.lon },
        selectedLocationId: selectedId,
      }));
    }
  };

  infoCloseClick = () => {
    this.setState(state => ({
      selectedLocationId: null,
    }));
  };

  handleMobileViewChange = (event, value) => {
    this.setState(state => ({
      selectedMobileView: value,
    }));
  }

  render() {
    const mobileMapHidden = this.state.isInMobileSize && this.state.selectedMobileView === 'list';

    return (
      <div className="container">
        <RadioButtonGroup className="view-picker" name="view-picker" defaultSelected="map" onChange={this.handleMobileViewChange}>
          <RadioButton
            value="map"
            label="map & list"
          />
          <RadioButton
            value="list"
            label="list only"
          />
        </RadioButtonGroup>
        <div className="wrapper">
          <Map
            hidden={mobileMapHidden}
            locations={this.props.locations}j
            selectedMarker={this.state.selectedLocationId}
            onLocationSelect={this.handleLocationSelect}
            center={this.state.mapCenter}
            onInfoClose={this.infoCloseClick}
          />
        <ListView locations={this.props.locations} onLocationSelect={this.handleListSelect}/>
        </div>
        <ModalContainer visible={this.props.selectedLocation} onCloseClick={this.props.onCloseClick} />
      </div>
    );
  }
}

export default App;
