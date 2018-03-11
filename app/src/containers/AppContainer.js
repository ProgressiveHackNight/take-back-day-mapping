import { connect } from 'react-redux';

import App from '../components/App';
import {handleModalClose} from '../actions/handleRsvpClick';

const mapStateToProps = state => ({
  selectedLocation: state.selectedLocation,
});

const mapDispatchToProps = dispatch => ({
	onCloseClick: dispatch(handleModalClose()),
})

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;