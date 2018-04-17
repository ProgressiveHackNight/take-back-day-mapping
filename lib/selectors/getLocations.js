"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var getLocations = function getLocations(state) {
  if (state.searchInput) {
    return state.locations.filter(function (event) {
      var eventName = event.name.toLowerCase();
      var eventAddress = event.location.toLowerCase();
      var searchInput = state.searchInput.toLowerCase();
      return eventName.indexOf(searchInput) !== -1 || eventAddress.indexOf(searchInput) !== -1 || null;
    });
  }
  return state.locations;
};

exports.default = getLocations;