"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _TextField = require("material-ui/TextField");

var _TextField2 = _interopRequireDefault(_TextField);

var _modalStyles = require("../styles/javascript/modalStyles");

var _buttons = require("../styles/javascript/buttons");

var _ReminderSuccess = require("./ReminderSuccess");

var _ReminderSuccess2 = _interopRequireDefault(_ReminderSuccess);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextReminder = function (_Component) {
  _inherits(TextReminder, _Component);

  function TextReminder(props) {
    _classCallCheck(this, TextReminder);

    var _this = _possibleConstructorReturn(this, (TextReminder.__proto__ || Object.getPrototypeOf(TextReminder)).call(this, props));

    _this.validateInput = function (input) {
      return (/@/.test(input)
      );
    };

    _this.handleChange = function (event) {
      var inputValue = event.target.value;

      if (_this.validateInput(inputValue)) {
        _this.setState({
          error: null,
          email: event.target.value
        });
      }
    };

    _this.handleClick = function () {
      if (!_this.validateInput(_this.state.email)) {
        _this.setState({
          error: "Please enter a valid email address."
        });
      } else {
        _this.setState({
          error: null
        });
        _this.props.onClick(_this.state.email);
      }
    };

    _this.state = {
      email: "",
      error: null
    };
    return _this;
  }

  _createClass(TextReminder, [{
    key: "render",
    value: function render() {
      var stlye = this.props.visible && !this.props.isCompleted ? _modalStyles.modalReminderWrapper : { display: "none" };

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "div",
          { style: stlye },
          _react2.default.createElement(_TextField2.default, {
            id: "email-field",
            type: "text",
            name: "email-input",
            onChange: this.handleChange.bind(this),
            underlineFocusStyle: { borderColor: "black" },
            errorText: this.state.error,
            floatingLabelText: "enter your email address",
            floatingLabelFocusStyle: { color: "#b1b1b1" },
            style: { marginBottom: 25 }
          }),
          _react2.default.createElement(
            "button",
            { style: _buttons.ctaButton, onClick: this.handleClick },
            "submit"
          )
        ),
        _react2.default.createElement(_ReminderSuccess2.default, {
          visible: this.props.visible && this.props.isCompleted,
          type: "text"
        })
      );
    }
  }]);

  return TextReminder;
}(_react.Component);

exports.default = TextReminder;