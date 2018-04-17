"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _searchSection = require("../styles/javascript/searchSection");

var _SearchFieldContainer = require("../containers/SearchFieldContainer");

var _SearchFieldContainer2 = _interopRequireDefault(_SearchFieldContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchSection = function SearchSection(_ref) {
  var onKeyUp = _ref.onKeyUp;

  return _react2.default.createElement(
    "div",
    { style: _searchSection.searchSectionStyle },
    _react2.default.createElement(_SearchFieldContainer2.default, { onKeyUp: onKeyUp })
  );
};

exports.default = SearchSection;