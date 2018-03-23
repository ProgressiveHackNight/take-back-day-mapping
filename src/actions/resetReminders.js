import types from '../actionTypes';

const resetReminders = () => dispatch => {
  return dispatch({
    type: types.RESET_REMINDERS,
    payload: null,
  });
};

export default resetReminders;
