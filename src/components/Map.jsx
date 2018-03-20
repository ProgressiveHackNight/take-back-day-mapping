import React, { Component } from 'react';
import PropTypes from 'prop-types';
import controllable from 'react-controllables';
import GoogleMapReact from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MapMarkerContainer from '../containers/MapMarkerContainer';

import { MARKER_WIDTH } from '../styles/javascript/mapMarkerStyles';

const Map = controllable(['center', 'zoom', 'hoverKey', 'clickKey'])(
  class Map extends Component {
    static propTypes = {
      center: PropTypes.object, // @controllable
      zoom: PropTypes.number, // @controllable
      hoverKey: PropTypes.string, // @controllable
      clickKey: PropTypes.string, // @controllable
      locations: PropTypes.array,
      selectedMarker: PropTypes.number,
      onLocationSelect: PropTypes.func,
    };

    static defaultProps = {
      zoom: 11,
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
      super(props);
    }

    onMarkerMouseEnter = key => {
      this.props.onHoverKeyChange(key);
    };

    onMarkerMouseLeave = () => {
      this.props.onHoverKeyChange(null);
    };

    render() {
      const generateMarkers = mapLocations => {
        return mapLocations.map((location, index) => {
          return (
            <MapMarkerContainer
              key={location.id}
              location={location}
              lat={location.lat}
              lng={location.lon}
              selected={this.props.selectedMarker == location.id}
              onInfoClose={this.props.onInfoClose}
            />
          );
        });
      };

      return (
        <div className="google-map">
          <GoogleMapReact
            center={this.props.center}
            defaultZoom={this.props.zoom}
            bootstrapURLKeys={{ key: 'AIzaSyDxJRIxEgWCGd2u-a_ZaucTTO3_DzHHL4U' }}
            onChildClick={this.props.onLocationSelect}
            hoverDistance={MARKER_WIDTH / 2}
            onChildMouseEnter={this.onMarkerMouseEnter}
            onChildMouseLeave={this.onMarkerMouseLeave}
          >
            {generateMarkers(this.props.locations)}
          </GoogleMapReact>
        </div>
      );
    }
  }
);

export default Map;
