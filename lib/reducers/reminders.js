'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reminders = function reminders() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { text: null, email: null };
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes2.default.ADD_TEXT_REMINDER:
      return {
        text: payload,
        email: state.email
      };
    case _actionTypes2.default.ADD_EMAIL_REMINDER:
      return {
        text: state.phone,
        email: payload
      };
    case _actionTypes2.default.RESET_REMINDERS:
      return {
        text: payload,
        email: payload
      };
    default:
      return state;
  }
};

exports.default = reminders;