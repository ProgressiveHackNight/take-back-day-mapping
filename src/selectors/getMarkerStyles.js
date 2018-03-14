import { squarePinMapMarker, hoverSquarePinMapMarker } from '../styles/javascript/mapMarkerStyles';

const MARKER_TYPES = {
  pharmacy: {
    normal: squarePinMapMarker,
    hover: hoverSquarePinMapMarker,
  },
  default: {
    normal: squarePinMapMarker,
    hover: hoverSquarePinMapMarker,
  },
};

const getMarkerStyles = locationType => {
  switch (locationType) {
    case 'Pharmacy':
      return MARKER_TYPES.pharmacy;
      break;
    default:
      return MARKER_TYPES.default;
  }
};

export default getMarkerStyles;
