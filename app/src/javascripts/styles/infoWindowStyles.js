import { MARKER_DIAMETER, MARKER_HOVER_WIDTH, MARKER_HOVER_HEIGHT } from './mapMarkerStyles';

const infoWindowStyle = {
  position: 'absolute',
  right: -MARKER_DIAMETER + MARKER_HOVER_WIDTH,
  bottom: -MARKER_DIAMETER + MARKER_HOVER_HEIGHT * 1.2,
  width: 70,
  height: 50,
  backgroundColor: 'green',
  zIndex: 1000,
};

export { infoWindowStyle };
