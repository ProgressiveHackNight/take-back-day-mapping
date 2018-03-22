import { connect } from 'react-redux';

import App from '../components/App';
import { unselectLocation } from '../actions/updateLocationSelect';
import { handleLocationFetch } from '../actions/handleLocationFetch';

const mapStateToProps = state => ({
  selectedLocation: state.selectedLocation,
  locations: state.locations,
});

const mapDispatchToProps = dispatch => ({
  onCloseClick: () => dispatch(unselectLocation()),
  fetchLocations: () => dispatch(handleLocationFetch()),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
