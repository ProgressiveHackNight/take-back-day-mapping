import { connect } from 'react-redux';
import LocationsList from '../components/LocationsList';

const showEvents = state => {
  if (state.searchInput) {
    return state.locations.filter(event => {
      const eventName = event.name.toLowerCase();
      const eventAddress = event.location.toLowerCase();
      const searchInput = state.searchInput.toLowerCase();
      return eventName.indexOf(searchInput) !== -1 || eventAddress.indexOf(searchInput) !== -1;
    });
  }
  return state.locations;
};

const mapStateToProps = state => ({
  events: showEvents(state),
});

const LocationsListContainer = connect(mapStateToProps)(LocationsList);

export default LocationsListContainer;
