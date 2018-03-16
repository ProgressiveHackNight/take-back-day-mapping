import { connect } from 'react-redux';

import RsvpModal from '../components/RsvpModal.jsx';

const getAddress = state => {
  return state.selectedLocation ? state.selectedLocation.location : null;
};

const mapStateToProps = state => ({
  address: getAddress(state),
});

const ModalContainer = connect(mapStateToProps)(RsvpModal);

export default ModalContainer;
