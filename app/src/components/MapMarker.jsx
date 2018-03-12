import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { mapMarkerStyle, mapMarkerHoverStyle } from '../styles/javascript/mapMarkerStyles';

import InfoWindow from './InfoWindow.jsx';

class MapMarker extends Component {
  static propTypes = {
    hover: PropTypes.bool,
    text: PropTypes.string,
    selected: PropTypes.bool,
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  handleClick() {
    alert('rsvp');
  }

  showInfoWindow = () => {
    if (this.props.selected) {
      return <InfoWindow style={{ width: 80 }} address={this.props.address} description={this.props.text} />;
    }
    return '';
  };

  render() {
    const style = this.props.selected || this.props.hover ? mapMarkerHoverStyle : mapMarkerStyle;

    return <div style={style}>{this.showInfoWindow()}</div>;
  }
}

export default MapMarker;
