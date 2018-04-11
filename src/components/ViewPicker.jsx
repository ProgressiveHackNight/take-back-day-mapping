import React from "react";
import PropTypes from "prop-types";

import { button } from "../styles/javascript/buttons";
import { DARK_DARK_GRAY } from "../styles/javascript/colors";

const viewPickerButton = {
  flexBasis: "50%",
};

const activeViewPickerButton = {
  ...button,
  backgroundColor: DARK_DARK_GRAY,
  fontWeight: "normal",
};

const inactiveViewPickerButton = {
  ...button,
  backgroundColor: "white",
  color: DARK_DARK_GRAY,
  border: "2px solid",
  borderColor: DARK_DARK_GRAY,
};

const leftButton = {
  borderRadius: "5.5px 0 0 5.5px",
};

const rightButton = {
  borderRadius: "0 5.5px 5.5px 0",
};

const rightActiveViewPickerButton = {
  ...viewPickerButton,
  ...activeViewPickerButton,
  ...rightButton,
};

const leftActiveViewPickerButton = {
  ...viewPickerButton,
  ...activeViewPickerButton,
  ...leftButton,
};

const rightDisabledViewPickerButton = {
  ...viewPickerButton,
  ...inactiveViewPickerButton,
  ...rightButton,
};

const leftDisabledViewPickerButton = {
  ...viewPickerButton,
  ...inactiveViewPickerButton,
  ...leftButton,
};

const ViewPicker = ({ activeView, labelOne, labelTwo, onToggleClick }) => {
  const activeButton = activeView === 1 ? "left" : "right";
  const leftButtonStyle =
    activeButton === "left"
      ? leftActiveViewPickerButton
      : leftDisabledViewPickerButton;
  const rightButtonStyle =
    activeButton === "right"
      ? rightActiveViewPickerButton
      : rightDisabledViewPickerButton;

  return (
    <div className="view-picker">
      <button id="1" style={leftButtonStyle} onClick={onToggleClick}>
        {labelOne}
      </button>
      <button id="2" style={rightButtonStyle} onClick={onToggleClick}>
        {labelTwo}
      </button>
    </div>
  );
};

ViewPicker.propTypes = {
  activeView: PropTypes.number,
  labelOne: PropTypes.string,
  labelTwo: PropTypes.string,
  onToggleClick: PropTypes.func,
};

export default ViewPicker;
