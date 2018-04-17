"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactAddToCalendar = require("react-add-to-calendar");

var _reactAddToCalendar2 = _interopRequireDefault(_reactAddToCalendar);

var _buttons = require("../styles/javascript/buttons");

var _event = require("../gateways/event");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddToCalendar = function AddToCalendar(props) {
  return _react2.default.createElement(
    "button",
    {
      style: _extends({}, _buttons.ctaButton, {
        outline: "none",
        padding: "8px 20px",
        textTransform: "lowercase"
      }),
      className: "reminder-button"
    },
    _react2.default.createElement(_reactAddToCalendar2.default, {
      event: _extends({}, _event.event, { location: props.location || "" })
    })
  );
};

exports.default = AddToCalendar;