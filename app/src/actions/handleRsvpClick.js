import types from '../actionTypes';

const handleRsvpClick = location => dispatch => {
  return dispatch({
    type: types.UPDATE_SELECTED_LOCATION,
    payload: location,
  });
};

const handleModalClose = () => dispatch => {
  return dispatch({
    type: types.UPDATE_SELECTED_LOCATION,
    payload: null,
  });
};
export { handleRsvpClick, handleModalClose };
