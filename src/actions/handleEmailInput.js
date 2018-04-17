import types from '../actionTypes';
import firebase from '../firebase';
import { addReminder } from '../gateways/reminder';

const database = firebase.database().ref('emailReminders');

const handleEmailInput = input => (dispatch, getState) => {
  const reminder = {
    email: input,
    location: getState().selectedLocation,
  };

  if (process.env.REACT_APP_API_ENV === 'server') {
    return addReminder({ reminder, type: 'email'})
      .then(isSuccess => (
        isSuccess && (
          dispatch({
            type: types.ADD_EMAIL_REMINDER,
            payload: true,
          })
        )
      ))
  } else {
    database.push(reminder);

    return dispatch({
      type: types.ADD_EMAIL_REMINDER,
      payload: true,
    });
  }
};

export default handleEmailInput;
