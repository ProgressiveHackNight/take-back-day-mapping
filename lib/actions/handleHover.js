'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endLocationHover = exports.beginLocationHover = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beginLocationHover = function beginLocationHover(location) {
  return function (dispatch) {
    return dispatch({
      type: _actionTypes2.default.BEGIN_LOCATION_HOVER,
      payload: location
    });
  };
};

var endLocationHover = function endLocationHover() {
  return function (dispatch) {
    return dispatch({
      type: _actionTypes2.default.END_LOCATION_HOVER,
      payload: null
    });
  };
};
exports.beginLocationHover = beginLocationHover;
exports.endLocationHover = endLocationHover;