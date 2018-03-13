const iconUrl = require('./svgs/map_icon_std.svg');
const squarePin = require('./svgs/square-pin.svg');

const MARKER_DIAMETER = 25;
const MARKER_WIDTH = 25;
const MARKER_HEIGHT = 32.5;

const MARKER_HOVER_WIDTH = MARKER_WIDTH * 2;
const MARKER_HOVER_HEIGHT = MARKER_HEIGHT * 2;

const SQUARE_PIN_WIDTH = 40;
const SQUARE_PIN_HEIGHT = 43;
const SQUARE_PIN_HOVER_WIDTH = SQUARE_PIN_WIDTH * 1.5;
const SQUARE_PIN_HOVER_HEIGHT = SQUARE_PIN_HEIGHT * 1.5;

// const mapMarkerStyle = {
//   // initially any map object has left top corner at lat lng coordinates
//   // it's on you to set object origin to 0,0 coordinates
//   position: 'absolute',
//   width: 25,
//   height: 32.5,
//   left: -MARKER_DIAMETER / 2, // -12.5
//   top: -MARKER_DIAMETER / 2, // -12.5
//
//   //borderRadius: MARKER_DIAMETER,
//   // fill: 'red',
//   backgroundImage: `url(${squarePin})`,
//   backgroundPosition: 'center center no-repeat',
//   backgroundSize: 'cover',
// };

const mapMarkerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  backgroundPosition: 'center center no-repeat',
  backgroundSize: 'cover',
};

const mapMarkerHoverStyle = {
  ...mapMarkerStyle,
  left: -MARKER_DIAMETER,
  top: -MARKER_DIAMETER * 2,
  width: MARKER_HOVER_WIDTH,
  height: MARKER_HOVER_HEIGHT, // 2 x height for this particular icon
};

const squarePinMapMarker = {
  ...mapMarkerStyle,
  width: SQUARE_PIN_WIDTH,
  height: SQUARE_PIN_HEIGHT,
  left: -SQUARE_PIN_WIDTH / 2,
  top: -SQUARE_PIN_WIDTH / 2,
  backgroundImage: `url(${squarePin})`,
};

const hoverSquarePinMapMarker = {
  ...squarePinMapMarker,
  width: SQUARE_PIN_HOVER_WIDTH,
  height: SQUARE_PIN_HOVER_HEIGHT,
  left: -SQUARE_PIN_WIDTH,
  top: -SQUARE_PIN_WIDTH,
};

export {
  mapMarkerStyle,
  mapMarkerHoverStyle,
  MARKER_DIAMETER,
  MARKER_HOVER_WIDTH,
  MARKER_HOVER_HEIGHT,
  squarePinMapMarker,
  hoverSquarePinMapMarker,
};
