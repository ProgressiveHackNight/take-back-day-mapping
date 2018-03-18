import types from '../actionTypes';

const entries = (state = {}, { type, payload }) => {
  switch (type) {
    case types.UPDATE_INPUT:
      return {
        phone: payload,
      };
    default:
      return state;
  }
};

export default entries;
