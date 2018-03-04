import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default class Map extends Component {
  static defaultProps = {
    center: { lat: 40.744679, lng: -73.948542 },
    zoom: 11,
  };
  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{ key: 'AIzaSyDxJRIxEgWCGd2u-a_ZaucTTO3_DzHHL4U' }}
        >
          <AnyReactComponent lat={40.747331} lng={-73.851744} text={"Where's Waldo?"} />
        </GoogleMapReact>
      </div>
    );
  }
}
