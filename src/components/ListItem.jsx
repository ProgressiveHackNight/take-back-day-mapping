import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import PropTypes from 'prop-types';

import { listItemStyle, listItemHoverStyle } from '../styles/javascript/listStyles';

class ListItem extends Component {
  static propTypes = {
    location: PropTypes.object,
    onLocationSelect: PropTypes.func,
    handleRsvpClick: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
  }

  onMouseEnter() {
    this.setState(state => ({
      hover: true,
    }));
  }

  onMouseLeave() {
    this.setState(state => ({
      hover: false,
    }));
  }

  render() {
    const style = this.state.hover ? listItemHoverStyle : listItemStyle;
    return (
      <div
        onClick={() => this.props.onLocationSelect(this.props.location.id)}
        onMouseEnter={this.onMouseEnter.bind(this)}
        onMouseLeave={this.onMouseLeave.bind(this)}
      >
        <li style={style}>
          <div>
            <h4>{this.props.location.name}</h4>
            <p>{this.props.location.location}</p>
          </div>
          <button onClick={this.props.handleRsvpClick}>rsvp</button>
        </li>
      </div>
    );
  }
}

export default ListItem;
