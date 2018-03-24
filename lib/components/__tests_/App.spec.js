'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testHelpers = require('../../testHelpers');

var _App = require('../App');

var _App2 = _interopRequireDefault(_App);

var _Map = require('../Map');

var _Map2 = _interopRequireDefault(_Map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('App', function () {

  var wrapper = void 0;
  var fetchStub = void 0;

  beforeEach(function () {
    fetchStub = jest.fn();

    wrapper = (0, _testHelpers.mountWithWrappers)(_react2.default.createElement(_App2.default, { locations: [], fetchLocations: fetchStub }));
  });

  it('renders fetches locations on mount', function () {
    expect(fetchStub).toHaveBeenCalled();
  });

  it('mounts map', function () {
    expect(wrapper.find(_Map2.default).length).toEqual(1);
  });
});