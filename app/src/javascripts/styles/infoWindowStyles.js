import { MARKER_DIAMETER } from './mapMarkerStyles';

const infoWindowStyle = {
  position: 'absolute',
  right: -MARKER_DIAMETER / 2 + 30,
  bottom: -MARKER_DIAMETER / 2 + 30,
  width: 70,
  height: 50,
  backgroundColor: 'green',
  zIndex: 1000,
};

export { infoWindowStyle };

