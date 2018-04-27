'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modalStyles = require('../styles/javascript/modalStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noteStyle = {
  textAlign: 'center',
  color: 'gray',
  fontSize: 14,
  marginBottom: 25,
  marginTop: 30,
  maxWidth: 350
};

var ReminderSuccess = function ReminderSuccess(_ref) {
  var visible = _ref.visible,
      type = _ref.type;

  if (visible) {
    return _react2.default.createElement(
      'div',
      { style: _modalStyles.successSection },
      _react2.default.createElement('div', { style: _modalStyles.successIcon }),
      _react2.default.createElement(
        'p',
        { style: noteStyle },
        'All set!',
        _react2.default.createElement('br', null),
        'We\'ll send you a reminder on Take Back Day.'
      )
    );
  };
  return '';
};

exports.default = ReminderSuccess;