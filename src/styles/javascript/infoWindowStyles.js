import { MARKER_WIDTH, MARKER_HOVER_WIDTH, MARKER_HOVER_HEIGHT } from './mapMarkerStyles';

const infoWindowBackground = require('./svgs/info-window.svg');

const infoWindowStyle = {
  position: 'absolute',
  right: -MARKER_WIDTH * 2.875,
  bottom: MARKER_WIDTH * 0.875,
  width: '200px',
  height: '150px',
  zIndex: 1000,
  color: 'black',
};

const infoText = {};

const infoContent = {};

const infoContainer = {
  display: 'flex',
  flexDirection: 'column',
  background: 'no-repeat',
  backgroundImage: `url(${infoWindowBackground})`,
  backgroundSize: '100%',
  minHeight: '125px',
  paddingLeft: 15,
  paddingTop: 5,
};

const plainButton = {
  background: 'none',
  alignSelf: 'left',
  color: 'black',
  textDecoration: 'underline',
  fontWeight: 'bold',
  border: 'none',
  margin: 0,
  padding: 0,
  display: 'block',
};

export { infoWindowStyle, infoContainer, infoContent, infoText, plainButton };
