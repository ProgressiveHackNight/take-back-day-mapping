'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testHelpers = require('../../testHelpers');

var _AppContainer = require('../AppContainer');

var _AppContainer2 = _interopRequireDefault(_AppContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.mock('../../actions/handleLocationFetch', function () {
  return { handleLocationFetch: function handleLocationFetch() {
      return { type: 'fake' };
    } };
});

describe('AppContainer', function () {
  it('renders without crashing', function () {
    (0, _testHelpers.mountWithWrappers)(_react2.default.createElement(_AppContainer2.default, null));
  });
});