import { CTA_GREEN, LIGHT_GRAY, MEDIUM_GRAY } from "./colors";

const button = {
  backgroundColor: MEDIUM_GRAY,
  color: "white",
  borderRadius: "5.5px",
  height: "40px",
  width: "auto",
  minWidth: 115,
  padding: "0 15px",
  fontFamily: "Avenir, Roboto, Open Sans, Arial, sans-serif",
  fontSize: "18px",
  fontWeight: "bold",
  border: "none",
};

const disabledButton = {
  ...button,
  backgroundColor: LIGHT_GRAY,
};

const ctaButton = {
  ...button,
  backgroundColor: CTA_GREEN,
};

const plainButton = {
  background: "none",
  color: "black",
  textDecoration: "underline",
  fontWeight: "bold",
  border: "none",
  margin: 0,
  padding: 0,
  display: "block",
};

export { button, ctaButton, disabledButton, plainButton };
