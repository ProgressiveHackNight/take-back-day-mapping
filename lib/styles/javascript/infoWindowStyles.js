"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoCloseButton = exports.infoHeader = exports.infoText = exports.infoContent = exports.infoContainer = exports.infoWindowStyle = undefined;

var _mapMarkerStyles = require("./mapMarkerStyles");

var infoWindowBackground = require("./svgs/info-window.svg");

var infoWindowStyle = {
  position: "absolute",
  right: -_mapMarkerStyles.MARKER_WIDTH * 2.875,
  bottom: 70,
  width: "200px",
  height: "130px",
  zIndex: 1000,
  color: "black"
};

var infoHeader = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
};

var infoCloseButton = {
  fontSize: 20,
  paddingTop: 5
};

var infoText = {
  marginBottom: 5
};

var infoContent = {
  textAlign: "left"
};

var infoContainer = {
  display: "flex",
  flexDirection: "column",
  background: "no-repeat",
  backgroundImage: "url(" + infoWindowBackground + ")",
  backgroundSize: "100%",
  minHeight: "145px",
  paddingLeft: 15,
  paddingRight: 15,
  paddingTop: 5,
  alignItems: "left"
};

exports.infoWindowStyle = infoWindowStyle;
exports.infoContainer = infoContainer;
exports.infoContent = infoContent;
exports.infoText = infoText;
exports.infoHeader = infoHeader;
exports.infoCloseButton = infoCloseButton;