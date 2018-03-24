'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _EventsList = require('../components/EventsList');

var _EventsList2 = _interopRequireDefault(_EventsList);

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

var EventsListContainer = (0, _reactRedux.connect)(mapStateToProps)(_EventsList2.default);

exports.default = EventsListContainer;