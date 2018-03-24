import { connect } from 'react-redux';

import InfoWindow from '../components/InfoWindow';
import { selectLocation } from '../actions/updateLocationSelect';
import { endLocationHover } from '../actions/handleHover';

const mapDispatchToProps = (dispatch, props) => ({
  onClick: () => dispatch(selectLocation(props.location)),
});

const InfoWindowContainer = connect(null, mapDispatchToProps)(InfoWindow);

export default InfoWindowContainer;
