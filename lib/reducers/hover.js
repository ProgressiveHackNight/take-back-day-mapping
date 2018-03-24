'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hover = function hover() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes2.default.BEGIN_LOCATION_HOVER:
      return payload;
    case _actionTypes2.default.END_LOCATION_HOVER:
      return null;
    default:
      return state;
  }
};

exports.default = hover;