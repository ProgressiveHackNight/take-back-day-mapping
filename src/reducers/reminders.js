import types from '../actionTypes';

const reminders = (state = { phone: null, email: null }, { type, payload }) => {
  switch (type) {
    case types.ADD_PHONE_REMINDER:
      return {
        phone: payload,
        email: state.email,
      };
    case types.ADD_EMAIL_REMINDER:
      return {
        phone: state.phone,
        email: payload,
      };
    default:
      return state;
  }
};

export default reminders;
