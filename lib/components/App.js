'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('../styles/css/App.css');

var _Map = require('./Map');

var _Map2 = _interopRequireDefault(_Map);

var _ListView = require('./ListView');

var _ListView2 = _interopRequireDefault(_ListView);

var _ModalContainer = require('../containers/ModalContainer');

var _ModalContainer2 = _interopRequireDefault(_ModalContainer);

var _RadioButton = require('material-ui/RadioButton');

var _listStyles = require('../styles/javascript/listStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultState = {
  selectedLocationId: null,
  mapCenter: { lat: 40.744679, lng: -73.948542 },
  selectedMobileView: 'map & list',
  isInMobileSize: null
};

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, App);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = App.__proto__ || Object.getPrototypeOf(App)).call.apply(_ref, [this].concat(args))), _this), _this.state = defaultState, _this.handleScreenSizeChange = function (e) {
      var screenWidth = window.outerWidth;
      var isMobile = screenWidth < 765 ? true : false;

      _this.setState(function (state) {
        return {
          isInMobileSize: isMobile
        };
      });
    }, _this.handleLocationSelect = function (selectedId) {
      _this.setState(function (state) {
        return {
          selectedLocationId: selectedId
        };
      });
    }, _this.handleListSelect = function (selectedId) {
      var selectedLoc = _this.props.locations.find(function (location) {
        return location.id == selectedId;
      });
      if (selectedLoc) {
        _this.setState(function (state) {
          return {
            mapCenter: { lat: selectedLoc.lat, lng: selectedLoc.lon },
            selectedLocationId: selectedId
          };
        });
      }
    }, _this.infoCloseClick = function () {
      _this.setState(function (state) {
        return {
          selectedLocationId: null
        };
      });
    }, _this.handleMobileViewChange = function (event, value) {
      _this.setState(function (state) {
        return {
          selectedMobileView: value
        };
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.props.fetchLocations();

      this.setState(function (state) {
        return {
          isInMobileSize: window.innerWidth < 765 ? true : false
        };
      });

      this.resizeListener = window.addEventListener('resize', function () {
        _this2.handleScreenSizeChange();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var mobileMapHidden = this.state.isInMobileSize && this.state.selectedMobileView === 'list';

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          _RadioButton.RadioButtonGroup,
          { className: 'view-picker', name: 'view-picker', defaultSelected: 'map', onChange: this.handleMobileViewChange },
          _react2.default.createElement(_RadioButton.RadioButton, {
            value: 'map',
            label: 'map & list'
          }),
          _react2.default.createElement(_RadioButton.RadioButton, {
            value: 'list',
            label: 'list only'
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'wrapper' },
          _react2.default.createElement(_Map2.default, {
            hidden: mobileMapHidden,
            locations: this.props.locations, j: true,
            selectedMarker: this.state.selectedLocationId,
            onLocationSelect: this.handleLocationSelect,
            center: this.state.mapCenter,
            onInfoClose: this.infoCloseClick
          }),
          _react2.default.createElement(_ListView2.default, { locations: this.props.locations, onLocationSelect: this.handleListSelect })
        ),
        _react2.default.createElement(_ModalContainer2.default, { visible: this.props.selectedLocation, onCloseClick: this.props.onCloseClick })
      );
    }
  }]);

  return App;
}(_react.Component);

exports.default = App;