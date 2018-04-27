import React, { Component } from "react";
import ReactGA from "react-ga";
import Map from "./Map";
import ListViewContainer from "../containers/ListViewContainer";
import ModalContainer from "../containers/ModalContainer";
import ViewPicker from "./ViewPicker";
import NoLocationReminder from "./NoLocationReminder";

const GOOGLE_ANALYTICS_CODE = "UA-33973995-10";

const defaultState = {
  selectedLocationId: null,
  mapCenter: { lat: 42.8864468, lng: -78.8783689 },
  selectedMobileView: 1,
  isInMobileSize: null,
};

class App extends Component {
  constructor() {
    super();
    ReactGA.initialize(GOOGLE_ANALYTICS_CODE);
  }
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
    const viewSelected = parseInt(event.target.id, 10);

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
            <ListViewContainer
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
