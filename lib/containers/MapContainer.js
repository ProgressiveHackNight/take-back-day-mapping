'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _Map = require('../components/Map');

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultCenter = { lat: 40.744679, lng: -73.948542 };

var getMapCenter = function getMapCenter(location) {
  return { lat: location.lat, lng: location.lon };
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    center: state.hover.lat ? getMapCenter(state.hover) : defaultCenter
  };
};

var MapContainer = (0, _reactRedux.connect)(mapStateToProps)(_Map2.default);

exports.default = MapContainer;