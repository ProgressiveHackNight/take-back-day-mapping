'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mockData = require('../../mockData');

var _mockData2 = _interopRequireDefault(_mockData);

var _testHelpers = require('../../testHelpers');

var _locations = require('../../gateways/locations');

var _Map = require('../Map');

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Map', function () {
  it('renders without crashing', function () {
    var fakeLocations = (0, _locations.toLocations)(_mockData2.default);
    (0, _testHelpers.mountWithWrappers)(_react2.default.createElement(_Map2.default, {
      locations: fakeLocations,
      selectedMarker: fakeLocations[0].id,
      onLocationSelect: function onLocationSelect() {
        return undefined;
      },
      center: { lat: 40.744679, lng: -73.948542 }
    }), { locations: fakeLocations });
  });
});