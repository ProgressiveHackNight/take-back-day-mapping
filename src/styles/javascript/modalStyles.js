const checkIcon = require("./svgs/check.svg");

const modal = {
  display: "block",
  position: "fixed",
  zIndex: "1",
  left: "0",
  top: "0",
  width: "100%",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0,0.4)",
  height: "100%",
};

const closeButtonWrapper = {
  alignSelf: "flex-end",
};

const closeButton = {
  fontSize: "16px",
  backgroundColor: "#C2C2C2",
  height: "30px",
  width: "30px",
  borderRadius: "30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
};

const modalButtonsContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  marginTop: 15,
  marginBottom: 10,
};

const modalAddressStyles = {
  color: "#4B4B4B",
  fontSize: 18,
  fontFamily: "Avenir",
  fontWeight: "bold",
  marginTop: 10,
  marginBottom: 10,
  textAlign: "center",
};

const reminderText = {
  marginBottom: 30,
  color: "#4B4B4B",
  fontSize: "16px",
};

const modalReminderWrapper = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: 15,
};

const successIcon = {
  backgroundImage: `url(${checkIcon})`,
  backgroundPosition: "center center no-repeat",
  backgroundSize: "cover",
  height: 100,
  width: 100,
};

const successSection = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export {
  modal,
  closeButton,
  closeButtonWrapper,
  modalButtonsContainer,
  modalAddressStyles,
  reminderText,
  modalReminderWrapper,
  successIcon,
  successSection,
};
