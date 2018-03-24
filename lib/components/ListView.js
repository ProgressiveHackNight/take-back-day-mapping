'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SearchSection = require('./SearchSection');

var _SearchSection2 = _interopRequireDefault(_SearchSection);

var _LocationsListContainer = require('../containers/LocationsListContainer');

var _LocationsListContainer2 = _interopRequireDefault(_LocationsListContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListView = function ListView(_ref) {
  var locations = _ref.locations,
      onLocationSelect = _ref.onLocationSelect;

  return _react2.default.createElement(
    'div',
    { className: 'locations-list-view' },
    _react2.default.createElement(_SearchSection2.default, null),
    _react2.default.createElement(_LocationsListContainer2.default, { events: locations, onLocationSelect: onLocationSelect })
  );
};

exports.default = ListView;