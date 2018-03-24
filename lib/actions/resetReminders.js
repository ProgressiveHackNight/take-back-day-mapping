'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resetReminders = function resetReminders() {
  return function (dispatch) {
    return dispatch({
      type: _actionTypes2.default.RESET_REMINDERS,
      payload: null
    });
  };
};

exports.default = resetReminders;