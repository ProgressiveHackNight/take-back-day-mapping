import React, { Component } from 'react';
import PropTypes from 'prop-types';
import controllable from 'react-controllables';
import GoogleMapReact from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MapMarker from '../components/MapMarker.jsx';

import { MARKER_DIAMETER } from '../styles/javascript/mapMarkerStyles';

const Map = controllable(['center', 'zoom', 'hoverKey', 'clickKey'])(
  class Map extends Component {
    static propTypes = {
      center: PropTypes.array, // @controllable
      zoom: PropTypes.number, // @controllable
      hoverKey: PropTypes.string, // @controllable
      clickKey: PropTypes.string, // @controllable
      locations: PropTypes.array,
      selectedMarker: PropTypes.string,
      onLocationSelect: PropTypes.func,
    };

    static defaultProps = {
      center: { lat: 40.744679, lng: -73.948542 },
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
            <MapMarker
              key={location.id}
              lat={location.lat}
              lng={location.lon}
              text={location.name}
              address={location.location}
              hover={this.props.hoverKey == location.id}
              selected={this.props.selectedMarker == location.id}
            />
          );
        });
      };

      return (
        <div className="google-map">
          <GoogleMapReact
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            bootstrapURLKeys={{ key: 'AIzaSyDxJRIxEgWCGd2u-a_ZaucTTO3_DzHHL4U' }}
            onChildClick={this.props.onLocationSelect}
            hoverDistance={MARKER_DIAMETER / 2}
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
