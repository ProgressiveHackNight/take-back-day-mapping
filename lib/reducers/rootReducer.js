'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _hover = require('./hover');

var _hover2 = _interopRequireDefault(_hover);

var _searchInput = require('./searchInput');

var _searchInput2 = _interopRequireDefault(_searchInput);

var _selectedLocation = require('./selectedLocation');

var _selectedLocation2 = _interopRequireDefault(_selectedLocation);

var _entries = require('./entries');

var _entries2 = _interopRequireDefault(_entries);

var _locations = require('./locations');

var _locations2 = _interopRequireDefault(_locations);

var _reminders = require('./reminders');

var _reminders2 = _interopRequireDefault(_reminders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rootReducer = (0, _redux.combineReducers)({
  hover: _hover2.default,
  searchInput: _searchInput2.default,
  selectedLocation: _selectedLocation2.default,
  entries: _entries2.default,
  locations: _locations2.default,
  reminders: _reminders2.default
});

exports.default = rootReducer;