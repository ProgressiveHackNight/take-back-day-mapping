import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import {
  squarePinMapMarker,
  hoverSquarePinMapMarker,
  getMarkerStyle,
  getMarkerHoverStyle,
} from '../styles/javascript/mapMarkerStyles';

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
    const normalMarkerStyle = getMarkerStyle(this.props.type);
    const hoverMarkerStyle = getMarkerHoverStyle(this.props.type);
    const style = this.props.selected || this.props.hover ? hoverMarkerStyle : normalMarkerStyle;

    return (
      <div style={style} onMouseEnter={this.props.onHover} onMouseLeave={this.props.onHoverEnd}>
        {this.showInfoWindow()}
      </div>
    );
  }
}

export default MapMarker;
