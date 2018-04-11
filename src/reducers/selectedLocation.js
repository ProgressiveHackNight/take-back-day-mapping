import types from "../actionTypes";

const selectedLocation = (state = "", { type, payload }) => {
  switch (type) {
    case types.UPDATE_SELECTED_LOCATION:
      return payload;
    default:
      return state;
  }
};

export default selectedLocation;
