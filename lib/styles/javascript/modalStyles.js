"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var checkIcon = require("./svgs/check.svg");

var modal = {
  display: "block",
  position: "fixed",
  zIndex: "1",
  left: "0",
  top: "0",
  width: "100vw",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0,0.4)",
  height: "100vh" // Removing this stops the jitter on error and label movement but reduced the full height of the modal background
};

var closeButtonWrapper = {
  alignSelf: "flex-end"
};

var closeButton = {
  fontSize: "16px",
  backgroundColor: "#C2C2C2",
  height: "30px",
  width: "30px",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  cursor: "pointer"
};

var modalButtonsContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginTop: 15,
  marginBottom: 10
};

var modalHeader = {
  color: "#4B4B4B",
  fontSize: 18,
  fontFamily: "Avenir, Roboto, Open Sans, Arial, sans-serif",
  fontWeight: "bold",
  marginTop: 10,
  marginBottom: 10,
  textAlign: "center"
};

var reminderText = {
  marginBottom: 30,
  color: "#4B4B4B",
  fontSize: "16px"
};

var modalReminderWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 15
};

var successIcon = {
  backgroundImage: "url(" + checkIcon + ")",
  backgroundPosition: "center center no-repeat",
  backgroundSize: "cover",
  height: 100,
  width: 100
};

var successSection = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
};

exports.modal = modal;
exports.closeButton = closeButton;
exports.closeButtonWrapper = closeButtonWrapper;
exports.modalButtonsContainer = modalButtonsContainer;
exports.modalHeader = modalHeader;
exports.reminderText = reminderText;
exports.modalReminderWrapper = modalReminderWrapper;
exports.successIcon = successIcon;
exports.successSection = successSection;