"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var isHoveredLocation = function isHoveredLocation(state, location) {
  if (state.hover) {
    return state.hover.id === location.id;
  }
  return false;
};

exports.default = isHoveredLocation;