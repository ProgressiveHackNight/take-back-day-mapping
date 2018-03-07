import React, { Component } from 'react';
import PropTypes from 'prop-types';
import controllable from 'react-controllables';
import GoogleMapReact from 'google-map-react';
import shouldPureComponentUpdate from 'react-pure-render/function';

import MapMarker from '../components/MapMarker.jsx';

import { MARKER_DIAMETER } from '../styles/mapMarkerStyles';

const Map = controllable(['center', 'zoom', 'hoverKey', 'clickKey'])(
  class Map extends Component {
    static propTypes = {
      center: PropTypes.array, // @controllable
      zoom: PropTypes.number, // @controllable
      hoverKey: PropTypes.string, // @controllable
      clickKey: PropTypes.string, // @controllable
      locations: PropTypes.array,
    };

    static defaultProps = {
      center: { lat: 40.744679, lng: -73.948542 },
      zoom: 11,
    };

    shouldComponentUpdate = shouldPureComponentUpdate;

    constructor(props) {
      super(props);
      this.state = {
        selectedMarker: null,
      };
    }

    onMarkerMouseEnter = key => {
      this.props.onHoverKeyChange(key);
    };

    onMarkerMouseLeave = () => {
      this.props.onHoverKeyChange(null);
    };

    onChildClick = (key, childProps) => {
      // can't just access this.props.children here because of wrapping
      // controllable component

      // Don't think .find is compatible in IE -- need to test
      const clickedChild = this.props.locations.find(marker => {
        return marker.id == this.props.hoverKey;
      });

      this.setState(state => ({
        selectedMarker: clickedChild.id,
      }));
    };

    render() {
      const mapLocations = this.props.locations;

      const generateMarkers = mapLocations => {
        return mapLocations.map((location, index) => {
          return (
            <MapMarker
              key={location.id}
              lat={location.lat}
              lng={location.lon}
              text={location.name}
              hover={this.props.hoverKey == location.id}
              selected={this.state.selectedMarker == location.id}
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
            onChildClick={this.onChildClick}
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
