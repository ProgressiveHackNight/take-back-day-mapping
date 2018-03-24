import React, { Component } from 'react';
import {
  modal,
  closeButton,
  closeButtonWrapper,
  modalAddressStyles,
  plainButton,
} from '../styles/javascript/modalStyles';

import { DARK_GRAY } from '../styles/javascript/colors';

import TextReminderContainer from '../containers/TextReminderContainer';
import EmailReminderContainer from '../containers/EmailReminderContainer';
import ChooseReminder from './ChooseReminder';
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
        <div className="modal-wrapper">
          <div
            style={closeButtonWrapper}
            onClick={() => {
              this.props.onCloseClick();
              this.handleCloseClick();
              this.props.resetModal();
            }}
          >
            <span style={closeButton}>&times;</span>
          </div>

          <p style={{ color: DARK_GRAY }}>Get a {displayReminderType(this.state)} reminder to drop off at this location:</p>

          <h4 style={modalAddressStyles}>{this.props.location.location}</h4>

          <ChooseReminder
            sectionStyle={reminderTypeStyle}
            textButtonClick={this.handlePhoneButtonClick}
            emailButtonClick={this.handleEmailButtonClick}
          />
          <TextReminderContainer location={this.props.location} visible={phoneInputVisible} />
          <EmailReminderContainer location={this.props.location} visible={emailInputVisible} />
          <button style={backButtonStyle} onClick={this.handleBackButtonClick}>
            go back
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
