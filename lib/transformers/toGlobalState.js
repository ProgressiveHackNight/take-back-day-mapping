'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var toGlobalState = function toGlobalState() {
  var initialData = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return _extends({
    hover: '',
    searchInput: '',
    locations: []
  }, initialData);
};

exports.default = toGlobalState;