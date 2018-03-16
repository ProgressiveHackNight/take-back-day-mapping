import types from '../actionTypes';

const locations = (state = null, { type, payload }) => {
  switch (type) {
    case types.FETCH_LOCATIONS:
      return payload;
    default:
      return state;
  }
};

export default locations;