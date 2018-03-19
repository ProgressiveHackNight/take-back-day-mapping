import { connect } from 'react-redux';

import Modal from '../components/Modal.jsx';

const getAddress = state => {
  return state.selectedLocation ? state.selectedLocation.location : null;
};

const mapStateToProps = state => ({
  address: getAddress(state),
});

const ModalContainer = connect(mapStateToProps)(Modal);

export default ModalContainer;
