'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _modalStyles = require('../styles/javascript/modalStyles');

var _buttons = require('../styles/javascript/buttons');

var _AddToCalendar = require('./AddToCalendar');

var _AddToCalendar2 = _interopRequireDefault(_AddToCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChooseReminder = function ChooseReminder(_ref) {
  var sectionStyle = _ref.sectionStyle,
      textButtonClick = _ref.textButtonClick,
      emailButtonClick = _ref.emailButtonClick,
      location = _ref.location;

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
        { style: _buttons.ctaButton, onClick: textButtonClick },
        'text'
      ),
      _react2.default.createElement(
        'button',
        { style: _buttons.ctaButton, onClick: emailButtonClick },
        'email'
      )
    ),
    _react2.default.createElement(_AddToCalendar2.default, { location: location })
  );
};

exports.default = ChooseReminder;