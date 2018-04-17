import types from '../actionTypes';
import firebase from '../firebase';
import { addReminder } from '../gateways/reminder';

// check if reminder request for number and location already exists before adding again
const database = firebase.database().ref('phoneReminders');

const handlePhoneInput = input => (dispatch, getState) => {
  const reminder = {
    phone: input,
    location: getState().selectedLocation,
  };

  if (process.env.REACT_APP_API_ENV === 'server') {
    return addReminder({ reminder, type: 'text'})
      .then(isSuccess => (
        isSuccess && (
          dispatch({
            type: types.ADD_TEXT_REMINDER,
            payload: true,
          })
        )
      ))
  } else {
    database.push(reminder);

    return dispatch({
      type: types.ADD_TEXT_REMINDER,
      payload: true,
    });
  }
};

export default handlePhoneInput;
