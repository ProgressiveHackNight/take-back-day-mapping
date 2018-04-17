"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactGa = require("react-ga");

var _reactGa2 = _interopRequireDefault(_reactGa);

var _SearchSection = require("./SearchSection");

var _SearchSection2 = _interopRequireDefault(_SearchSection);

var _LocationsListContainer = require("../containers/LocationsListContainer");

var _LocationsListContainer2 = _interopRequireDefault(_LocationsListContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ListView = function (_Component) {
  _inherits(ListView, _Component);

  function ListView(props) {
    _classCallCheck(this, ListView);

    var _this = _possibleConstructorReturn(this, (ListView.__proto__ || Object.getPrototypeOf(ListView)).call(this, props));

    _this.locationsFound = function (response) {
      _this.setState({
        locationsFound: response
      });
    };

    _this.trackWithGoogleAnalytics = function (searchValue) {
      _reactGa2.default.event({
        category: "No Location Found",
        action: searchValue
      });
    };

    _this.onSearchKeyUp = function (event) {
      var searchValue = event.target.value;

      window.clearTimeout(_this.state.timer);
      var timer = window.setTimeout(function () {
        if (!_this.state.locationsFound) {
          _this.trackWithGoogleAnalytics(searchValue);
        }
      }, 5000);

      _this.setState({
        timer: timer
      });
    };

    _this.state = {
      timer: null,
      locationsFound: null
    };
    return _this;
  }

  _createClass(ListView, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "locations-list-view" },
        _react2.default.createElement(_SearchSection2.default, { onKeyUp: this.onSearchKeyUp }),
        _react2.default.createElement(_LocationsListContainer2.default, {
          events: this.props.locations,
          onLocationSelect: this.props.onLocationSelect,
          onLocationsReturn: this.locationsFound
        })
      );
    }
  }]);

  return ListView;
}(_react.Component);

exports.default = ListView;