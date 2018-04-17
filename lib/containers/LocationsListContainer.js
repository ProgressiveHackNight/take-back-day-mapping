"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require("react-redux");

var _LocationsList = require("../components/LocationsList");

var _LocationsList2 = _interopRequireDefault(_LocationsList);

var _getLocations = require("../selectors/getLocations");

var _getLocations2 = _interopRequireDefault(_getLocations);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    locations: (0, _getLocations2.default)(state)
  };
};

var LocationsListContainer = (0, _reactRedux.connect)(mapStateToProps)(_LocationsList2.default);

exports.default = LocationsListContainer;