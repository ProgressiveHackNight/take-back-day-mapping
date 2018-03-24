'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('../actionTypes');

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleSearchInput = function handleSearchInput(event) {
  return function (dispatch) {
    var searchInput = event.target.value;
    return dispatch({
      type: _actionTypes2.default.UPDATE_SEARCH_VALUE,
      payload: searchInput
    });
  };
};

exports.default = handleSearchInput;