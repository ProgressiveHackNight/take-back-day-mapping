"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require("../actionTypes");

var _actionTypes2 = _interopRequireDefault(_actionTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var selectedLocation = function selectedLocation() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var _ref = arguments[1];
  var type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actionTypes2.default.UPDATE_SELECTED_LOCATION:
      return payload;
    default:
      return state;
  }
};

exports.default = selectedLocation;