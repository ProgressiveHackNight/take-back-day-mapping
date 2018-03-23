import { connect } from 'react-redux';

import Modal from '../components/Modal.jsx';

const getLocation = state => {
  return state.selectedLocation ? state.selectedLocation : { location: '' };
};

const mapStateToProps = state => ({
  location: getLocation(state),
});

const ModalContainer = connect(mapStateToProps)(Modal);

export default ModalContainer;
