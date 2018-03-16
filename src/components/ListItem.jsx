import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import PropTypes from 'prop-types';

import { listItemStyle, listItemHoverStyle, listButtonStyle } from '../styles/javascript/listStyles';

const locationTitleStyle = {
  color: '#4B4B4B',
  fontSize: 20,
  fontFamily: 'Avenir',
  fontWeight: 'bold',
};

const locationAddressStyle = {
  color: '#8C8C8C',
  fontSize: 14,
  fontFamily: 'Avenir',
};

class ListItem extends Component {
  static propTypes = {
    location: PropTypes.object,
    onLocationSelect: PropTypes.func,
    handleRsvpClick: PropTypes.func,
  };

  render() {
    const style = this.props.hover ? listItemHoverStyle : listItemStyle;
    return (
      <div
        onClick={() => this.props.onLocationSelect(this.props.location.id)}
        onMouseEnter={this.props.onHover}
        onMouseLeave={this.props.onHoverEnd}
      >
        <li style={style}>
          <div>
            <p style={locationTitleStyle}>{this.props.location.name}</p>
            <p style={locationAddressStyle}>{this.props.location.location}</p>
          </div>
          <button style={listButtonStyle} onClick={this.props.handleRsvpClick}>
            remind
          </button>
        </li>
      </div>
    );
  }
}

export default ListItem;
