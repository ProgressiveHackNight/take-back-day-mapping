'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactControllables = require('react-controllables');

var _reactControllables2 = _interopRequireDefault(_reactControllables);

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _function = require('react-pure-render/function');

var _function2 = _interopRequireDefault(_function);

var _MapMarkerContainer = require('../containers/MapMarkerContainer');

var _MapMarkerContainer2 = _interopRequireDefault(_MapMarkerContainer);

var _mapMarkerStyles = require('../styles/javascript/mapMarkerStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Map = (0, _reactControllables2.default)(['center', 'zoom', 'hoverKey', 'clickKey'])((_temp = _class = function (_Component) {
  _inherits(Map, _Component);

  function Map(props) {
    _classCallCheck(this, Map);

    var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this, props));

    _this.shouldComponentUpdate = _function2.default;

    _this.onMarkerMouseEnter = function (key) {
      _this.props.onHoverKeyChange(key);
    };

    _this.onMarkerMouseLeave = function () {
      _this.props.onHoverKeyChange(null);
    };

    return _this;
  }

  _createClass(Map, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var mapClassName = this.props.hidden ? 'google-map-mobile-hidden' : 'google-map';

      var generateMarkers = function generateMarkers(mapLocations) {
        return mapLocations.map(function (location, index) {
          return _react2.default.createElement(_MapMarkerContainer2.default, {
            key: location.id,
            location: location,
            lat: location.lat,
            lng: location.lon,
            selected: _this2.props.selectedMarker == location.id,
            onInfoClose: _this2.props.onInfoClose
          });
        });
      };

      return _react2.default.createElement(
        'div',
        { className: mapClassName },
        _react2.default.createElement(
          _googleMapReact2.default,
          {
            center: this.props.center,
            defaultZoom: this.props.zoom,
            bootstrapURLKeys: { key: 'AIzaSyDxJRIxEgWCGd2u-a_ZaucTTO3_DzHHL4U' },
            onChildClick: this.props.onLocationSelect,
            hoverDistance: _mapMarkerStyles.MARKER_WIDTH / 2,
            onChildMouseEnter: this.onMarkerMouseEnter,
            onChildMouseLeave: this.onMarkerMouseLeave
          },
          generateMarkers(this.props.locations)
        )
      );
    }
  }]);

  return Map;
}(_react.Component), _class.propTypes = {
  center: _propTypes2.default.object, // @controllable
  zoom: _propTypes2.default.number, // @controllable
  hoverKey: _propTypes2.default.string, // @controllable
  clickKey: _propTypes2.default.string, // @controllable
  locations: _propTypes2.default.array,
  selectedMarker: _propTypes2.default.number,
  onLocationSelect: _propTypes2.default.func
}, _class.defaultProps = {
  zoom: 11
}, _temp));

exports.default = Map;