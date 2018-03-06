const iconUrl = require('./svgs/map_icon_std.svg');

const MARKER_DIAMETER = 25;

const mapMarkerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: 25,
  height: 32.5,
  left: -MARKER_DIAMETER / 2,
  top: -MARKER_DIAMETER / 2,

  //borderRadius: MARKER_DIAMETER,
  // backgroundColor: 'red',
  backgroundImage: `url(${iconUrl})`,
  backgroundPosition: 'center center no-repeat',
  backgroundSize: 'cover',
};

const mapMarkerHoverStyle = {
  ...mapMarkerStyle,
  left: MARKER_DIAMETER / 5 * 0.625,
  top: MARKER_DIAMETER / 5 * 0.625,
  width: 40,
  height: 52, // 1.3 x height for this particular icon
};

const infoWindowStyle = {
  position: 'absolute',
  right: -MARKER_DIAMETER / 2 + 30,
  bottom: -MARKER_DIAMETER / 2 + 30,
  width: 70,
  height: 50,
  backgroundColor: 'green',
  zIndex: 1000,
};

export { mapMarkerStyle, mapMarkerHoverStyle, infoWindowStyle, MARKER_DIAMETER };
