import types from '../actionTypes';

const reminders = (state = { text: null, email: null }, { type, payload }) => {
  switch (type) {
    case types.ADD_TEXT_REMINDER:
      return {
        text: payload,
        email: state.email,
      };
    case types.ADD_EMAIL_REMINDER:
      return {
        text: state.phone,
        email: payload,
      };
    case types.RESET_REMINDERS:
      return {
        text: payload,
        email: payload,
      };
    default:
      return state;
  }
};

export default reminders;
