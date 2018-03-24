'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _firebase = require('../firebase');

var _firebase2 = _interopRequireDefault(_firebase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// check if reminder request for number and location already exists before adding again
var database = _firebase2.default.database().ref('phoneReminders');

var handlePhoneInput = function handlePhoneInput(input) {
  return function (dispatch, getState) {
    var reminder = {
      phone: input,
      location: getState().selectedLocation
    };

    database.push(reminder);

    return dispatch({
      type: _actionTypes2.default.ADD_TEXT_REMINDER,
      payload: true
    });
  };
};

exports.default = handlePhoneInput;