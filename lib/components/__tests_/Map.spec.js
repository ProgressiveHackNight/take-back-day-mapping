'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _locationdata = require('../../locationdata');

var _locationdata2 = _interopRequireDefault(_locationdata);

var _testHelpers = require('../../testHelpers');

var _locations = require('../../gateways/locations');

var _Map = require('../Map');

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Map', function () {
  it('renders without crashing', function () {
    var theLocations = (0, _locations.toLocations)(_locationdata2.default);
    (0, _testHelpers.mountWithWrappers)(_react2.default.createElement(_Map2.default, {
      locations: theLocations,
      selectedMarker: theLocations[0].id,
      onLocationSelect: function onLocationSelect() {
        return undefined;
      },
      center: { lat: 40.744679, lng: -73.948542 }
    }), { locations: theLocations });
  });
});