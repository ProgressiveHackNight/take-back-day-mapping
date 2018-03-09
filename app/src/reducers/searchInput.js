import types from '../actionTypes';

const searchInput = (state = '', { type, payload }) => {
  switch (type) {
    case types.UPDATE_SEARCH_VALUE:
      return payload;
    default:
      return state;
  }
};

export default searchInput;
