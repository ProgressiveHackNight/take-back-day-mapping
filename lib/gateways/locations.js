'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toLocations = exports.fetchLocations = undefined;

var _mockData = require('../mockData');

var _mockData2 = _interopRequireDefault(_mockData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsonEndpoint = 'https://takebackday.infoloom.com/media/output.json';

var fetchLocations = exports.fetchLocations = function fetchLocations() {
  return fetch(jsonEndpoint).then(function (resp) {
    return resp.json();
  }).then(function (resp) {
    return toLocations(resp);
  }).catch(function () {
    return toLocations(_mockData2.default);
  });
};

var toLocations = exports.toLocations = function toLocations(apiLocations) {
  return apiLocations.map(function (location, idx) {
    return {
      id: idx,
      name: location.name,
      type: location.type,
      location: location.address,
      lat: parseFloat(location.latitude),
      lon: parseFloat(location.longitude)
    };
  });
};