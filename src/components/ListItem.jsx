import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

import { listButtonStyle } from '../styles/javascript/listStyles';

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

const paperStyle = {
  width: '100%',
  textAlign: 'left',
  display: 'inline-block',
  overflow: 'auto',
  borderRadius: 5,
  marginTop: 10,
  paddingLeft: 20,
  paddingBottom: 20,
  marginLeft: 5,
  marginRight: 5,
};

const paperHoverStyle = {
  ...paperStyle,
  backgroundColor: '#EFEFEF',
};

class ListItem extends Component {
  static propTypes = {
    location: PropTypes.object,
    onLocationSelect: PropTypes.func,
    handleRsvpClick: PropTypes.func,
  };

  render() {
    const style = this.props.hover ? paperHoverStyle : paperStyle;
    return (
      <div
        onClick={() => this.props.onLocationSelect(this.props.location.id)}
        onMouseEnter={this.props.onHover}
        onMouseLeave={this.props.onHoverEnd}
      >
        <Paper style={style} zDepth={1}>
          <div>
            <p style={locationTitleStyle}>{this.props.location.name}</p>
            <p style={locationAddressStyle}>{this.props.location.location}</p>
          </div>
          <button style={listButtonStyle} onClick={this.props.handleRsvpClick}>
            remind
          </button>
        </Paper>
      </div>
    );
  }
}

export default ListItem;
