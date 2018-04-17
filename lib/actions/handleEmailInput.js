'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _firebase = require('../firebase');

var _firebase2 = _interopRequireDefault(_firebase);

var _reminder = require('../gateways/reminder');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var database = _firebase2.default.database().ref('emailReminders');

var handleEmailInput = function handleEmailInput(input) {
  return function (dispatch, getState) {
    var reminder = {
      email: input,
      location: getState().selectedLocation
    };

    if (process.env.REACT_APP_API_ENV === 'server') {
      return (0, _reminder.addReminder)({ reminder: reminder, type: 'email' }).then(function (isSuccess) {
        return isSuccess && dispatch({
          type: _actionTypes2.default.ADD_EMAIL_REMINDER,
          payload: true
        });
      });
    } else {
      database.push(reminder);

      return dispatch({
        type: _actionTypes2.default.ADD_EMAIL_REMINDER,
        payload: true
      });
    }
  };
};

exports.default = handleEmailInput;