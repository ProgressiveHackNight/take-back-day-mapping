import { connect } from 'react-redux';

import App from '../components/App';
import { unselectLocation } from '../actions/updateLocationSelect';

const mapStateToProps = state => ({
  selectedLocation: state.selectedLocation,
});

const mapDispatchToProps = dispatch => ({
  onCloseClick: () => dispatch(unselectLocation()),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
