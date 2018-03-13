import { connect } from 'react-redux';

import InfoWindow from '../components/InfoWindow.jsx';
import { handleRsvpClick } from '../actions/handleRsvpClick';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(handleRsvpClick(props.address)),
});

const InfoWindowContainer = connect(null, mapDispatchToProps)(InfoWindow);

export default InfoWindowContainer;
