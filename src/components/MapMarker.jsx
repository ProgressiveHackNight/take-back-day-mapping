import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { squarePinMapMarker, hoverSquarePinMapMarker } from '../styles/javascript/mapMarkerStyles';
import getMarkerStyles from '../selectors/getMarkerStyles';

import InfoWindowContainer from '../containers/InfoWindowContainer';

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

  showInfoWindow = () => {
    if (this.props.selected) {
      return <InfoWindowContainer style={{ width: 80 }} address={this.props.address} description={this.props.text} />;
    }
    return '';
  };

  render() {
    const markerStyles = getMarkerStyles(this.props.type);
    const style = this.props.selected || this.props.hover ? markerStyles.hover : markerStyles.normal;

    return <div style={style}>{this.showInfoWindow()}</div>;
  }
}

export default MapMarker;
