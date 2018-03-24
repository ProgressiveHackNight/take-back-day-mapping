'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modalStyles = require('../styles/javascript/modalStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChooseReminder = function ChooseReminder(_ref) {
  var sectionStyle = _ref.sectionStyle,
      textButtonClick = _ref.textButtonClick,
      emailButtonClick = _ref.emailButtonClick;

  return _react2.default.createElement(
    'div',
    { style: sectionStyle },
    _react2.default.createElement(
      'p',
      { style: _modalStyles.reminderText },
      'What kind of reminder would you like to recieve?'
    ),
    _react2.default.createElement(
      'div',
      { style: _modalStyles.modalButtonsContainer },
      _react2.default.createElement(
        'button',
        { style: _modalStyles.modalButtonStyle, onClick: textButtonClick },
        'text'
      ),
      _react2.default.createElement(
        'button',
        { style: _modalStyles.modalButtonStyle, onClick: emailButtonClick },
        'email'
      )
    )
  );
};

exports.default = ChooseReminder;