import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';
import { mapMarkerStyle, mapMarkerHoverStyle } from '../styles/mapMarkerStyles';

import InfoWindow from './InfoWindow.jsx';

class MapMarker extends Component {
  static propTypes = {
    hover: PropTypes.bool,
    text: PropTypes.string,
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  showInfoWindow = () => {
    if (this.props.hover) {
      return <InfoWindow style={{ width: 80 }} description={'hello world'} />;
    }
    return '';
  };

  render() {
    const style = this.props.hover ? mapMarkerHoverStyle : mapMarkerStyle;

    return (
      <div style={style}>
        <div>{this.props.text}</div>
        {this.showInfoWindow()}
      </div>
    );
  }
}

export default MapMarker;
