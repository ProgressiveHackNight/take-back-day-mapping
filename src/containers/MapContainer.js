import {connect} from 'react-redux';

import Map from '../components/Map';

const defaultCenter = { lat: 40.744679, lng: -73.948542 };

const getMapCenter = location => {
  return { lat: location.lat, lng: location.lon };
}

const mapStateToProps = state => ({
  center: state.hover.lat ? getMapCenter(state.hover) : defaultCenter,
});

const MapContainer = connect(mapStateToProps)(Map);

export default MapContainer;
