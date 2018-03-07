import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import PropTypes from 'prop-types';

import { listItemStyle, listItemHoverStyle } from '../styles/listStyles';

class ListItem extends Component {
  static propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
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
      <div onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
        <li style={style}>
          <div>
            <h4>{this.props.name}</h4>
            <p>{this.props.address}</p>
          </div>
          <button>rsvp</button>
        </li>
      </div>
    );
  }
}

export default ListItem;
