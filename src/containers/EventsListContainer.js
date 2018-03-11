import { connect } from 'react-redux';
import EventsList from '../components/EventsList.jsx';

import mockData from '../mockData';

const showEvents = state => {
  if (state.searchInput) {
    return mockData.filter(event => {
      const eventName = event.name.toLowerCase();
      const searchInput = state.searchInput.toLowerCase();
      return eventName.indexOf(searchInput) !== -1;
    });
  }
  return mockData;
};

const mapStateToProps = state => ({
  events: showEvents(state),
});

const EventsListContainer = connect(mapStateToProps)(EventsList);

export default EventsListContainer;
