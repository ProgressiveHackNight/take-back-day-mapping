import types from '../actionTypes';

const beginLocationHover = location => dispatch => {
  return dispatch({
    type: types.BEGIN_LOCATION_HOVER,
    payload: location,
  });
};

const endLocationHover = () => dispatch => {
  return dispatch({
    type: types.END_LOCATION_HOVER,
    payload: null,
  });
};
export { beginLocationHover, endLocationHover };
