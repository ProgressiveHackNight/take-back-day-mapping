"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Paper = require("material-ui/Paper");

var _Paper2 = _interopRequireDefault(_Paper);

var _buttons = require("../styles/javascript/buttons");

var _colors = require("../styles/javascript/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var locationTitleStyle = {
  color: "#4B4B4B",
  fontSize: 20,
  fontFamily: "Avenir",
  fontWeight: "bold"
};

var locationAddressStyle = {
  color: "#8C8C8C",
  fontSize: 14,
  fontFamily: "Avenir"
};

var paperStyle = {
  width: "100%",
  textAlign: "left",
  display: "inline-block",
  overflow: "auto",
  borderRadius: 5,
  marginTop: 10,
  paddingLeft: 20,
  paddingBottom: 20,
  marginLeft: 5,
  marginRight: 5
};

var paperHoverStyle = _extends({}, paperStyle, {
  backgroundColor: _colors.LIGHT_GRAY
});

var ListItem = function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var style = this.props.hover ? paperHoverStyle : paperStyle;
      return _react2.default.createElement(
        "div",
        {
          onClick: function onClick() {
            return _this2.props.onLocationSelect(_this2.props.location.id);
          },
          onMouseEnter: this.props.onHover,
          onMouseLeave: this.props.onHoverEnd
        },
        _react2.default.createElement(
          _Paper2.default,
          { style: style, zDepth: 1 },
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "p",
              { style: locationTitleStyle },
              this.props.location.name
            ),
            _react2.default.createElement(
              "p",
              { style: locationAddressStyle },
              this.props.location.location
            )
          ),
          _react2.default.createElement(
            "button",
            { style: _buttons.ctaButton, onClick: this.props.handleRsvpClick },
            "get reminder"
          )
        )
      );
    }
  }]);

  return ListItem;
}(_react.Component);

ListItem.propTypes = {
  location: _propTypes2.default.object,
  onLocationSelect: _propTypes2.default.func,
  handleRsvpClick: _propTypes2.default.func
};
exports.default = ListItem;