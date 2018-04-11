import React, { Component } from "react";
import Map from "./Map";
import ListView from "./ListView";
import ModalContainer from "../containers/ModalContainer";
import ViewPicker from "./ViewPicker";
import NoLocationReminder from "./NoLocationReminder";

const defaultState = {
  selectedLocationId: null,
  mapCenter: { lat: 40.744679, lng: -73.948542 },
  selectedMobileView: 1,
  isInMobileSize: null,
};

class App extends Component {
  state = defaultState;

  componentDidMount() {
    this.props.fetchLocations();

    this.setState(state => ({
      isInMobileSize: window.innerWidth < 765 ? true : false,
    }));

    this.resizeListener = window.addEventListener("resize", () => {
      this.handleScreenSizeChange();
    });
  }

  handleScreenSizeChange = e => {
    const screenWidth = window.outerWidth;
    const isMobile = screenWidth < 765 ? true : false;

    this.setState(state => ({
      isInMobileSize: isMobile,
    }));
  };

  handleLocationSelect = selectedId => {
    this.setState(state => ({
      selectedLocationId: selectedId,
    }));
  };

  handleListSelect = selectedId => {
    const selectedLoc = this.props.locations.find(
      location => location.id == selectedId
    );
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

  onViewToggle = event => {
    const viewSelected = parseInt(event.target.id);

    this.setState(state => ({
      selectedMobileView: viewSelected,
    }));
  };

  render() {
    const mobileMapHidden =
      this.state.isInMobileSize && this.state.selectedMobileView === 2;

    return (
      <div className="container">
        <ViewPicker
          activeView={this.state.selectedMobileView}
          labelOne="Map and List"
          labelTwo="List Only"
          onToggleClick={this.onViewToggle}
        />

        <div className="wrapper">
          <div className="map-wrapper">
            <Map
              hidden={mobileMapHidden}
              locations={this.props.locations}
              j
              selectedMarker={this.state.selectedLocationId}
              onLocationSelect={this.handleLocationSelect}
              center={this.state.mapCenter}
              onInfoClose={this.infoCloseClick}
            />
            <ListView
              locations={this.props.locations}
              onLocationSelect={this.handleListSelect}
            />
          </div>
          <NoLocationReminder className="reminders-wrapper" />
        </div>
        <ModalContainer
          visible={this.props.selectedLocation}
          onCloseClick={this.props.onCloseClick}
        />
      </div>
    );
  }
}

export default App;
