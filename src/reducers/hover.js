import types from '../actionTypes';

const hover = (state = '', { type, payload }) => {
  switch (type) {
    case types.BEGIN_LOCATION_HOVER:
      return payload;
    case types.END_LOCATION_HOVER:
      return null;
    default:
      return state;
  }
};

export default hover;
