"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _buttons = require("../styles/javascript/buttons");

var _colors = require("../styles/javascript/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viewPickerButton = {
  flexBasis: "50%"
};

var activeViewPickerButton = _extends({}, _buttons.button, {
  backgroundColor: _colors.DARK_DARK_GRAY,
  fontWeight: "normal"
});

var inactiveViewPickerButton = _extends({}, _buttons.button, {
  backgroundColor: "white",
  color: _colors.DARK_DARK_GRAY,
  border: "2px solid",
  borderColor: _colors.DARK_DARK_GRAY
});

var leftButton = {
  borderRadius: "5.5px 0 0 5.5px"
};

var rightButton = {
  borderRadius: "0 5.5px 5.5px 0"
};

var rightActiveViewPickerButton = _extends({}, viewPickerButton, activeViewPickerButton, rightButton);

var leftActiveViewPickerButton = _extends({}, viewPickerButton, activeViewPickerButton, leftButton);

var rightDisabledViewPickerButton = _extends({}, viewPickerButton, inactiveViewPickerButton, rightButton);

var leftDisabledViewPickerButton = _extends({}, viewPickerButton, inactiveViewPickerButton, leftButton);

var ViewPicker = function ViewPicker(_ref) {
  var activeView = _ref.activeView,
      labelOne = _ref.labelOne,
      labelTwo = _ref.labelTwo,
      onToggleClick = _ref.onToggleClick;

  var activeButton = activeView === 1 ? "left" : "right";
  var leftButtonStyle = activeButton === "left" ? leftActiveViewPickerButton : leftDisabledViewPickerButton;
  var rightButtonStyle = activeButton === "right" ? rightActiveViewPickerButton : rightDisabledViewPickerButton;

  return _react2.default.createElement(
    "div",
    { className: "view-picker" },
    _react2.default.createElement(
      "button",
      { id: "1", style: leftButtonStyle, onClick: onToggleClick },
      labelOne
    ),
    _react2.default.createElement(
      "button",
      { id: "2", style: rightButtonStyle, onClick: onToggleClick },
      labelTwo
    )
  );
};

ViewPicker.propTypes = {
  activeView: _propTypes2.default.number,
  labelOne: _propTypes2.default.string,
  labelTwo: _propTypes2.default.string,
  onToggleClick: _propTypes2.default.func
};

exports.default = ViewPicker;