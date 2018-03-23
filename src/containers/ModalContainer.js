import { connect } from 'react-redux';

import Modal from '../components/Modal.jsx';
import resetReminders from '../actions/resetReminders';

const getLocation = state => {
  return state.selectedLocation ? state.selectedLocation : { location: '' };
};

const mapStateToProps = state => ({
  location: getLocation(state),
});

const mapDispatchToProps = dispatch => ({
  resetModal: () => dispatch(resetReminders())
})

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
