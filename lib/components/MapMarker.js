"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _function = require("react-pure-render/function");

var _function2 = _interopRequireDefault(_function);

var _mapMarkerStyles = require("../styles/javascript/mapMarkerStyles");

var _InfoWindowContainer = require("../containers/InfoWindowContainer");

var _InfoWindowContainer2 = _interopRequireDefault(_InfoWindowContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MapMarker = function (_Component) {
  _inherits(MapMarker, _Component);

  function MapMarker() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MapMarker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MapMarker.__proto__ || Object.getPrototypeOf(MapMarker)).call.apply(_ref, [this].concat(args))), _this), _this.shouldComponentUpdate = _function2.default, _this.showInfoWindow = function () {
      if (_this.props.selected) {
        return _react2.default.createElement(_InfoWindowContainer2.default, {
          style: { width: 80 },
          location: _this.props.location,
          onCloseClick: _this.props.onInfoClose
        });
      }
      return "";
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MapMarker, [{
    key: "render",
    value: function render() {
      var normalMarkerStyle = (0, _mapMarkerStyles.getMarkerStyle)(this.props.location.type);
      var hoverMarkerStyle = (0, _mapMarkerStyles.getMarkerHoverStyle)(this.props.location.type);
      var style = this.props.selected || this.props.hover ? hoverMarkerStyle : normalMarkerStyle;

      return _react2.default.createElement(
        "div",
        {
          style: style,
          onMouseEnter: this.props.onHover,
          onMouseLeave: this.props.onHoverEnd
        },
        this.showInfoWindow()
      );
    }
  }]);

  return MapMarker;
}(_react.Component);

MapMarker.propTypes = {
  hover: _propTypes2.default.bool,
  location: _propTypes2.default.object,
  selected: _propTypes2.default.bool,
  lat: _propTypes2.default.number,
  lng: _propTypes2.default.number
};
MapMarker.defaultProps = {};
exports.default = MapMarker;