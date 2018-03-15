const isHoveredLocation = (state, location) => {
  if (state.hover) {
    return state.hover.id === location.id;
  }
  return false;
};

export default isHoveredLocation;

