import React, { Component } from 'react';
import {
  modal,
  modalWrapper,
  closeButton,
  closeButtonWrapper,
  modalAddressStyles,
  plainButton,
} from '../styles/javascript/modalStyles';

import { DARK_GRAY } from '../styles/javascript/colors';

import PhoneInputSectionContainer from '../containers/PhoneInputSectionContainer';
import EmailInputSectionContainer from '../containers/EmailInputSectionContainer';
import ReminderTypeSection from './ReminderTypeSection';
import displayReminderType from '../helpers/displayReminderType';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneButtonClicked: null,
      emailButtonClicked: null,
    };
  }

  handlePhoneButtonClick = () => {
    this.setState({
      phoneButtonClicked: true,
      emailButtonClicked: false,
    });
  };

  handleEmailButtonClick = () => {
    this.setState({
      emailButtonClicked: true,
      phoneButtonClicked: false,
    });
  };

  handleCloseClick = () => {
    this.setState({
      phoneButtonClicked: false,
      emailButtonClicked: false,
    });
  };

  handleBackButtonClick = () => {
    this.setState({
      phoneButtonClicked: null,
      emailButtonClicked: null,
    });
  };

  render() {
    const visibleStyle = { display: 'block' };
    const hiddenStyle = { display: 'none' };

    const modalStyle = this.props.visible ? modal : hiddenStyle;
    const phoneInputVisible = this.state.phoneButtonClicked && !this.state.emailButtonClicked;
    const emailInputVisible = this.state.emailButtonClicked && !this.state.phoneButtonClicked;
    const reminderTypeStyle =
      !this.state.phoneButtonClicked && !this.state.emailButtonClicked ? visibleStyle : hiddenStyle;
    const backButtonStyle = this.state.phoneButtonClicked || this.state.emailButtonClicked ? plainButton : hiddenStyle;

    return (
      <div style={modalStyle}>
        <div style={modalWrapper}>
          <div
            style={closeButtonWrapper}
            onClick={() => {
              this.props.onCloseClick();
              this.handleCloseClick();
            }}
          >
            <span style={closeButton}>&times;</span>
          </div>

          <p style={{ color: DARK_GRAY }}>Get a {displayReminderType(this.state)} reminder to drop off at this location:</p>

          <h4 style={modalAddressStyles}>{this.props.address}</h4>

          <ReminderTypeSection
            sectionStyle={reminderTypeStyle}
            textButtonClick={this.handlePhoneButtonClick}
            emailButtonClick={this.handleEmailButtonClick}
          />
          <PhoneInputSectionContainer visible={phoneInputVisible} />
          <EmailInputSectionContainer visible={emailInputVisible} />
          <button style={backButtonStyle} onClick={this.handleBackButtonClick}>
            go back
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
