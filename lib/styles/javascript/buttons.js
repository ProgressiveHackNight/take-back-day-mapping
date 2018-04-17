"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.plainButton = exports.disabledButton = exports.ctaButton = exports.button = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _colors = require("./colors");

var button = {
  backgroundColor: _colors.MEDIUM_GRAY,
  color: "white",
  borderRadius: "5.5px",
  height: "40px",
  width: "auto",
  minWidth: 115,
  padding: "0 15px",
  fontFamily: "Avenir, Roboto, Open Sans, Arial, sans-serif",
  fontSize: "18px",
  fontWeight: "bold",
  border: "none"
};

var disabledButton = _extends({}, button, {
  backgroundColor: _colors.LIGHT_GRAY
});

var ctaButton = _extends({}, button, {
  backgroundColor: _colors.CTA_GREEN
});

var plainButton = {
  background: "none",
  color: "black",
  textDecoration: "underline",
  fontWeight: "bold",
  border: "none",
  margin: 0,
  padding: 0,
  display: "block"
};

exports.button = button;
exports.ctaButton = ctaButton;
exports.disabledButton = disabledButton;
exports.plainButton = plainButton;