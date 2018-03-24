'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bold = { fontWeight: 'bold' };

var displayReminderType = function displayReminderType(state) {
  if (state.phoneButtonClicked) {
    return _react2.default.createElement(
      'span',
      { style: bold },
      'text'
    );
  } else if (state.emailButtonClicked) {
    return _react2.default.createElement(
      'span',
      { style: bold },
      'email'
    );
  }
  return '';
};

exports.default = displayReminderType;