'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _LocationsList = require('../components/LocationsList');

var _LocationsList2 = _interopRequireDefault(_LocationsList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var showEvents = function showEvents(state) {
  if (state.searchInput) {
    return state.locations.filter(function (event) {
      var eventName = event.name.toLowerCase();
      var eventAddress = event.location.toLowerCase();
      var searchInput = state.searchInput.toLowerCase();
      return eventName.indexOf(searchInput) !== -1 || eventAddress.indexOf(searchInput) !== -1;
    });
  }
  return state.locations;
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    events: showEvents(state)
  };
};

var LocationsListContainer = (0, _reactRedux.connect)(mapStateToProps)(_LocationsList2.default);

exports.default = LocationsListContainer;