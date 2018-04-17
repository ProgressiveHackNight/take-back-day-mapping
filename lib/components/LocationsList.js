"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _ListItemContainer = require("../containers/ListItemContainer");

var _ListItemContainer2 = _interopRequireDefault(_ListItemContainer);

var _listStyles = require("../styles/javascript/listStyles");

var _colors = require("../styles/javascript/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var noLocations = {
  textAlign: "center",
  color: _colors.MEDIUM_GRAY,
  paddingTop: "15px"
};

var generateListItems = function generateListItems(locations, onLocationSelect) {
  if (locations.length) {
    return locations.map(function (location) {
      return _react2.default.createElement(_ListItemContainer2.default, {
        location: location,
        onLocationSelect: onLocationSelect,
        id: location.id,
        key: location.id
      });
    });
  }
};

var LocationsList = function LocationsList(_ref) {
  var locations = _ref.locations,
      onLocationSelect = _ref.onLocationSelect,
      onLocationsReturn = _ref.onLocationsReturn;

  if (locations.length !== 0) {
    onLocationsReturn(true);
    return _react2.default.createElement(
      "div",
      { id: "locations-list", className: "list-container" },
      _react2.default.createElement(
        "ul",
        { className: "locations-list", style: _listStyles.listStyle },
        generateListItems(locations, onLocationSelect)
      )
    );
  } else {
    onLocationsReturn(false);
    return _react2.default.createElement(
      "div",
      { style: noLocations, className: "list-container" },
      _react2.default.createElement(
        "div",
        { id: "no-results" },
        "No locations found."
      )
    );
  }
};

exports.default = LocationsList;