import { connect } from "react-redux";

import resetReminders from "../actions/resetReminders";
import Modal from "../components/Modal";

const getLocation = state => {
  return state.selectedLocation ? state.selectedLocation : { location: null };
};

const mapStateToProps = state => ({
  location: getLocation(state),
});

const mapDispatchToProps = dispatch => ({
  resetModal: () => dispatch(resetReminders()),
});

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer;
