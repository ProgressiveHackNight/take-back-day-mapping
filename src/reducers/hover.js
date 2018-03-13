import types from '../actionTypes';

const hover = (state = '', { type }) => {
  switch (type) {
    case types.CHANGE_LOCATION_HOVER:
      console.log('hovering new location');
      return null;
    default:
      return state;
  }
};

export default hover;
