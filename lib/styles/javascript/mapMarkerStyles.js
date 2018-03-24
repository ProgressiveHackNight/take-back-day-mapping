'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var squarePin = require('./svgs/pharmacy-marker.svg');
var policeIcon = require('./svgs/police-marker.svg');
var healthIcon = require('./svgs/health-marker.svg');
var defaultIcon = require('./svgs/general-marker.svg');

var MARKER_WIDTH = 40;
var SQUARE_PIN_HEIGHT = 43;
var MARKER_HOVER_WIDTH = MARKER_WIDTH * 1.5;
var MARKER_HOVER_HEIGHT = SQUARE_PIN_HEIGHT * 1.5;

var markerIcons = {
  Pharmacy: squarePin,
  Police: policeIcon,
  Hospital: healthIcon
};

var mapMarkerStyle = {
  position: 'absolute',
  backgroundPosition: 'center center no-repeat',
  backgroundSize: 'cover'
};

var getMarkerStyle = function getMarkerStyle(type) {
  var markerIcon = markerIcons[type] ? markerIcons[type] : defaultIcon;

  return _extends({}, mapMarkerStyle, {
    width: MARKER_WIDTH,
    height: SQUARE_PIN_HEIGHT,
    left: -MARKER_WIDTH / 2,
    top: -MARKER_WIDTH / 2,
    backgroundImage: 'url(' + markerIcon + ')'
  });
};

var getMarkerHoverStyle = function getMarkerHoverStyle(type) {
  var markerIcon = markerIcons[type] ? markerIcons[type] : defaultIcon;

  return _extends({}, mapMarkerStyle, {
    width: MARKER_HOVER_WIDTH,
    height: MARKER_HOVER_HEIGHT,
    left: -MARKER_WIDTH,
    top: -MARKER_WIDTH,
    backgroundImage: 'url(' + markerIcon + ')'
  });
};

exports.MARKER_WIDTH = MARKER_WIDTH;
exports.MARKER_HOVER_WIDTH = MARKER_HOVER_WIDTH;
exports.MARKER_HOVER_HEIGHT = MARKER_HOVER_HEIGHT;
exports.getMarkerStyle = getMarkerStyle;
exports.getMarkerHoverStyle = getMarkerHoverStyle;