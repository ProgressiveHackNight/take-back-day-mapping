'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ListItemContainer = require('../containers/ListItemContainer');

var _ListItemContainer2 = _interopRequireDefault(_ListItemContainer);

var _listStyles = require('../styles/javascript/listStyles');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateListItems = function generateListItems(events, onLocationSelect) {
  return events.map(function (event) {
    return _react2.default.createElement(_ListItemContainer2.default, { location: event, onLocationSelect: onLocationSelect, id: event.id, key: event.id });
  });
};

var EventsList = function EventsList(_ref) {
  var events = _ref.events,
      onLocationSelect = _ref.onLocationSelect;

  return _react2.default.createElement(
    'div',
    { style: _listStyles.listContainerStyle },
    _react2.default.createElement(
      'ul',
      { style: _listStyles.listStyle },
      generateListItems(events, onLocationSelect)
    )
  );
};

exports.default = EventsList;