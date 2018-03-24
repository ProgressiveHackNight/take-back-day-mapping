import { connect } from 'react-redux';

import MapMarker from '../components/MapMarker';
import { beginLocationHover, endLocationHover } from '../actions/handleHover';
import isHoveredLocation from '../selectors/isHoveredLocation';

const mapStateToProps = (state, props) => ({
  hover: isHoveredLocation(state, props.location),
});

const mapDispatchToProps = (dispatch, props) => ({
  onHover: () => dispatch(beginLocationHover(props.location)),
  onHoverEnd: () => dispatch(endLocationHover()),
});

const MapMarkerContainer = connect(mapStateToProps, mapDispatchToProps)(MapMarker);

export default MapMarkerContainer;
