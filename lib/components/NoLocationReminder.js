"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactScroll = require("react-scroll");

var _NoLocationModal = require("./NoLocationModal");

var _NoLocationModal2 = _interopRequireDefault(_NoLocationModal);

var _colors = require("../styles/javascript/colors");

var _buttons = require("../styles/javascript/buttons");

var _AddToCalendar = require("./AddToCalendar");

var _AddToCalendar2 = _interopRequireDefault(_AddToCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  color: _colors.DARK_GRAY,
  padding: '150px 60px'
};

var buttonStyle = _extends({}, _buttons.ctaButton, {
  width: "200px"
});

var NonLocationReminder = function (_Component) {
  _inherits(NonLocationReminder, _Component);

  function NonLocationReminder(props) {
    _classCallCheck(this, NonLocationReminder);

    var _this = _possibleConstructorReturn(this, (NonLocationReminder.__proto__ || Object.getPrototypeOf(NonLocationReminder)).call(this, props));

    _this.onModalClose = function () {
      console.log("clicked");
      _this.setState({
        modalIsActive: false
      });
      console.log("modalIsActive", _this.state.modalIsActive);
    };

    _this.onRedminderClick = function () {
      console.log("clicked");
      _this.setState({
        modalIsActive: true
      });
      console.log("modalIsActive", _this.state.modalIsActive);
    };

    _this.onTextButtonClick = function () {
      _this.setState({
        type: "text"
      });
    };

    _this.onEmailButtonClick = function () {
      _this.setState({
        type: "email"
      });
    };

    _this.state = {
      modalIsActive: null,
      type: ""
    };
    return _this;
  }

  _createClass(NonLocationReminder, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactScroll.Element,
        { style: style, className: "reminder-container", name: "text" },
        _react2.default.createElement(
          "div",
          { className: "container-constrain" },
          _react2.default.createElement(
            "h2",
            null,
            "Get a drop-off reminder"
          ),
          _react2.default.createElement(
            "p",
            null,
            "Sign up to get a text or email reminder with your nearest medication drop-off location before the next National Prescription Drug Take Back Day."
          )
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "button",
            {
              style: buttonStyle,
              className: "reminder-button",
              onClick: function onClick() {
                _this2.onRedminderClick();
                _this2.onTextButtonClick();
              }
            },
            "get text"
          ),
          _react2.default.createElement(
            "button",
            {
              style: buttonStyle,
              className: "reminder-button",
              onClick: function onClick() {
                _this2.onRedminderClick();
                _this2.onEmailButtonClick();
              }
            },
            "get email"
          ),
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(_AddToCalendar2.default, null)
          )
        ),
        _react2.default.createElement(_NoLocationModal2.default, {
          isActive: this.state.modalIsActive,
          onClose: this.onModalClose,
          reminderType: this.state.type
        })
      );
    }
  }]);

  return NonLocationReminder;
}(_react.Component);

exports.default = NonLocationReminder;