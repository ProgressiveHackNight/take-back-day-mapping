const MARKER_DIAMETER = 25;

const mapMarkerStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: MARKER_DIAMETER,
  height: MARKER_DIAMETER,
  left: -MARKER_DIAMETER / 2,
  top: -MARKER_DIAMETER / 2,

  borderRadius: MARKER_DIAMETER,
  backgroundColor: 'red',
};

const mapMarkerHoverStyle = {
  ...mapMarkerStyle,
  width: MARKER_DIAMETER + 5,
  height: MARKER_DIAMETER + 5,

  borderRadius: MARKER_DIAMETER,
  backgroundColor: 'blue',
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
