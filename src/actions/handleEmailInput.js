import types from '../actionTypes';
import firebase from '../firebase';

const database = firebase.database().ref('emailReminders');

const handleEmailInput = input => (dispatch, getState) => {
  const reminder = {
    email: input,
    location: getState().selectedLocation,
  };

  database.push(reminder);

  return dispatch({
    type: types.ADD_EMAIL_REMINDER,
    payload: true,
  });
};

export default handleEmailInput;
