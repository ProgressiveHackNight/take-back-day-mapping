import { MARKER_WIDTH, MARKER_HOVER_WIDTH, MARKER_HOVER_HEIGHT } from './mapMarkerStyles';

const infoWindowBackground = require('./svgs/info-window.svg');

const infoWindowStyle = {
  position: 'absolute',
  right: -MARKER_WIDTH * 3.25,
  bottom: MARKER_HOVER_HEIGHT - MARKER_HOVER_HEIGHT / 1.5,
  width: '200px',
  height: '150px',
  zIndex: 1000,
  color: 'black',
  padding: 15,
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
  padding: 10,
};

const rsvpButton = {
  background: 'none',
  alignSelf: 'left',
  color: 'black',
  textDecoration: 'underline',
  fontWeight: 'bold',
  border: 'none',
  margin: 0,
  padding: 0,
};

export { infoWindowStyle, infoContainer, infoContent, infoText, rsvpButton };
