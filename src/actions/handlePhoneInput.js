import types from '../actionTypes';
import firebase from '../firebase';

// check if reminder request for number and location already exists before adding again
const database = firebase.database().ref('phoneReminders');

const handlePhoneInput = input => (dispatch, getState) => {
  const reminder = {
    phone: input,
    location: getState().selectedLocation,
  };

  database.push(reminder);

  return dispatch({
    type: types.ADD_TEXT_REMINDER,
    payload: true,
  });
};

export default handlePhoneInput;
