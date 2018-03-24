'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleLocationFetch = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

var _locations = require('../gateways/locations');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleLocationFetch = function handleLocationFetch() {
  return function (dispatch) {
    return (0, _locations.fetchLocations)().then(function (locations) {
      return dispatch({
        type: _actionTypes2.default.FETCH_LOCATIONS,
        payload: locations
      });
    });
  };
};
exports.handleLocationFetch = handleLocationFetch;