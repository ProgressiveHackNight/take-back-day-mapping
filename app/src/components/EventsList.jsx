import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';
import PropTypes from 'prop-types';

import ListItem from './ListItem.jsx';
import { listContainerStyle, listStyle, listItemStyle } from '../styles/javascript/listStyles';

class EventsList extends Component {
  static propTypes = {
    events: PropTypes.array,
    onLocationSelect: PropTypes.func,
  };

  constructor(props) {
    super(props);
  }

  generateListItems = events => {
    return events.map(event => {
      return <ListItem
        name={event.name}
        address={event.location}
        key={event.id}
        id={event.id}

        onLocationSelect={this.props.onLocationSelect}
      />;
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
