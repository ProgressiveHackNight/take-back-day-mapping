'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unselectLocation = exports.selectLocation = undefined;

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectLocation = function selectLocation(location) {
  return function (dispatch) {
    return dispatch({
      type: _actionTypes2.default.UPDATE_SELECTED_LOCATION,
      payload: location
    });
  };
};

var unselectLocation = function unselectLocation() {
  return function (dispatch) {
    return dispatch({
      type: _actionTypes2.default.UPDATE_SELECTED_LOCATION,
      payload: null
    });
  };
};
exports.selectLocation = selectLocation;
exports.unselectLocation = unselectLocation;