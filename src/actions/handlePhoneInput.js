import types from '../actionTypes';
import firebase from '../firebase';

const database = firebase.database().ref('reminders');

const handlePhoneInput = input => (dispatch, getState) => {
  const reminder = {
    phone: input,
    location: getState().selectedLocation,
  };

  database.push(reminder);

  return dispatch({
    type: types.UPDATE_PHONE_INPUT,
    payload: input,
  });
};

export default handlePhoneInput;
