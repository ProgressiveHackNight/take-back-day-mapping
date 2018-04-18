'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toLocations = exports.fetchLocations = undefined;

var _locationdata = require('../locationdata');

var _locationdata2 = _interopRequireDefault(_locationdata);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const jsonEndpoint = 'https://takebackday.infoloom.com/media/output.json';

var fetchLocations = exports.fetchLocations = function fetchLocations() {
  return (
    // fetch(jsonEndpoint)
    //   .then(resp => resp.json())
    //   .then(resp => toLocations(resp))
    //   .catch(() => toLocations(locationData))
    Promise.resolve(toLocations(_locationdata2.default))
  );
};

var toLocations = exports.toLocations = function toLocations(apiLocations) {
  return apiLocations.map(function (location, idx) {
    return {
      id: idx,
      name: location.name,
      type: location.type,
      location: location.address,
      lat: location.latitude && parseFloat(location.latitude),
      lon: location.longitude && parseFloat(location.longitude)
    };
  });
};