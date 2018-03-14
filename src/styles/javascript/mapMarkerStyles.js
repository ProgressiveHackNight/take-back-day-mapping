const squarePin = require('./svgs/pharmacy-marker.svg');
const policeIcon = require('./svgs/police-marker.svg');
const healthIcon = require('./svgs/health-marker.svg');
const defaultIcon = require('./svgs/general-marker.svg');

const MARKER_WIDTH = 40;
const SQUARE_PIN_HEIGHT = 43;
const MARKER_HOVER_WIDTH = MARKER_WIDTH * 1.5;
const MARKER_HOVER_HEIGHT = SQUARE_PIN_HEIGHT * 1.5;

const markerIcons = {
  Pharmacy: squarePin,
  Police: policeIcon,
  Hospital: healthIcon,
};

const mapMarkerStyle = {
  position: 'absolute',
  backgroundPosition: 'center center no-repeat',
  backgroundSize: 'cover',
};

const getMarkerStyle = type => {
  const markerIcon = markerIcons[type] ? markerIcons[type] : defaultIcon;

  return {
    ...mapMarkerStyle,
    width: MARKER_WIDTH,
    height: SQUARE_PIN_HEIGHT,
    left: -MARKER_WIDTH / 2,
    top: -MARKER_WIDTH / 2,
    backgroundImage: `url(${markerIcon})`,
  };
};

const getMarkerHoverStyle = type => {
  const markerIcon = markerIcons[type] ? markerIcons[type] : defaultIcon;

  return {
    ...mapMarkerStyle,
    width: MARKER_HOVER_WIDTH,
    height: MARKER_HOVER_HEIGHT,
    left: -MARKER_WIDTH,
    top: -MARKER_WIDTH,
    backgroundImage: `url(${markerIcon})`,
  };
};

export { MARKER_WIDTH, MARKER_HOVER_WIDTH, MARKER_HOVER_HEIGHT, getMarkerStyle, getMarkerHoverStyle };
