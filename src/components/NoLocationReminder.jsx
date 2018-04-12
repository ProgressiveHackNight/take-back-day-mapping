import React, { Component } from "react";
import { Element } from 'react-scroll';

import NoLocationModal from "./NoLocationModal";

import { DARK_GRAY } from "../styles/javascript/colors";
import { ctaButton } from "../styles/javascript/buttons";

const style = {
  color: DARK_GRAY,
};

const buttonStyle = {
  ...ctaButton,
  width: "200px",
};

class NonLocationReminder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsActive: null,
      type: "",
    };
  }

  onModalClose = () => {
    console.log("clicked");
    this.setState({
      modalIsActive: false,
    });
    console.log("modalIsActive", this.state.modalIsActive);
  };

  onRedminderClick = () => {
    console.log("clicked");
    this.setState({
      modalIsActive: true,
    });
    console.log("modalIsActive", this.state.modalIsActive);
  };

  onTextButtonClick = () => {
    this.setState({
      type: "text",
    });
  };

  onEmailButtonClick = () => {
    this.setState({
      type: "email",
    });
  };

  render() {
    return (
      <Element style={style} className="reminder-container" name="text">
        <div>
          <h2>Get a drop-off reminder</h2>
          <p>
            We'll send you a message on Take Back Day to remind you to find a
            drop-off location to swing by.
          </p>
        </div>
        <div>
          <button
            style={buttonStyle}
            className="reminder-button"
            onClick={() => {
              this.onRedminderClick();
              this.onTextButtonClick();
            }}
          >
            get text
          </button>
          <button
            style={buttonStyle}
            className="reminder-button"
            onClick={() => {
              this.onRedminderClick();
              this.onEmailButtonClick();
            }}
          >
            get email
          </button>
        </div>
        <NoLocationModal
          isActive={this.state.modalIsActive}
          onClose={this.onModalClose}
          reminderType={this.state.type}
        />
      </Element>
    );
  }
}

export default NonLocationReminder;
