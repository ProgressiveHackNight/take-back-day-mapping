import React, { Component } from "react";
import ReactGA from "react-ga";

import SearchSection from "./SearchSection";
import LocationsListContainer from "../containers/LocationsListContainer";

class ListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: null,
      locationsFound: null,
    };
  }

  locationsFound = response => {
    this.setState({
      locationsFound: response,
    });
  };

  trackWithGoogleAnalytics = searchValue => {
    ReactGA.event({
      category: "No Location Found",
      action: searchValue,
    });
  };

  onSearchKeyUp = event => {
    const searchValue = event.target.value;

    window.clearTimeout(this.state.timer);
    const timer = window.setTimeout(() => {
      if (!this.state.locationsFound) {
        this.trackWithGoogleAnalytics(searchValue);
      }
    }, 5000);

    this.setState({
      timer: timer,
    });
  };

  render() {
    return (
      <div className="locations-list-view">
        <SearchSection onKeyUp={this.onSearchKeyUp} />
        <LocationsListContainer
          events={this.props.locations}
          onLocationSelect={this.props.onLocationSelect}
          onLocationsReturn={this.locationsFound}
        />
      </div>
    );
  }
}

export default ListView;
