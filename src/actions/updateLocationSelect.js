import types from '../actionTypes';

const selectLocation = location => dispatch => {
  return dispatch({
    type: types.UPDATE_SELECTED_LOCATION,
    payload: location,
  });
};

const unselectLocation = () => dispatch => {
  return dispatch({
    type: types.UPDATE_SELECTED_LOCATION,
    payload: null,
  });
};
export { selectLocation, unselectLocation };
