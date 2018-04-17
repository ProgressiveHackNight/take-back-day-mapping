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

// check if reminder request for number and location already exists before adding again
var database = _firebase2.default.database().ref('phoneReminders');

var handlePhoneInput = function handlePhoneInput(input) {
  return function (dispatch, getState) {
    var reminder = {
      phone: input,
      location: getState().selectedLocation
    };

    if (process.env.REACT_APP_API_ENV === 'server') {
      return (0, _reminder.addReminder)({ reminder: reminder, type: 'text' }).then(function (isSuccess) {
        return isSuccess && dispatch({
          type: _actionTypes2.default.ADD_TEXT_REMINDER,
          payload: true
        });
      });
    } else {
      database.push(reminder);

      return dispatch({
        type: _actionTypes2.default.ADD_TEXT_REMINDER,
        payload: true
      });
    }
  };
};

exports.default = handlePhoneInput;