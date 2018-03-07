import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';
import { listContainerStyle, listStyle, listItemStyle } from '../styles/listStyles';

class EventsList extends Component {
  static propTypes = {
    events: PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  generateListItems = events => {
    return events.map(event => {
      return <ListItem name={event.name} address={event.location} />;
    });
  };

  render() {
    return (
      <div style={listContainerStyle}>
        <ul style={listStyle}>{this.generateListItems(this.props.events)}</ul>
      </div>
    );
  }
}

export default EventsList;
