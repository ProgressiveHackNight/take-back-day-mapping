import React, { Component } from 'react';
import {
  modal,
  modalWrapper,
  closeButton,
  closeButtonWrapper,
  modalAddressStyles,
  plainButton,
} from '../styles/javascript/modalStyles';

import { phoneNumberInputDefault, phoneNumberInputHidden } from '../styles/javascript/inputStyles';

import PhoneInputSectionContainer from '../containers/PhoneInputSectionContainer';
import ReminderTypeSection from './ReminderTypeSection';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneButtonClicked: null,
    };
  }

  handlePhoneButtonClick = () => {
    this.setState({
      phoneButtonClicked: true,
    });
  };

  handleCloseClick = () => {
    this.setState({
      phoneButtonClicked: false,
    });
  };

  handleBackButtonClick = () => {
    this.setState({
      phoneButtonClicked: null,
    });
  };

  render() {
    const visibleStyle = { display: 'block' };
    const hiddenStyle = { display: 'none' };

    const modalStyle = this.props.visible ? modal : hiddenStyle;
    const phoneInputVisible = this.state.phoneButtonClicked;
    const reminderTypeStyle = !this.state.phoneButtonClicked ? visibleStyle : hiddenStyle;
    const backButtonStyle = this.state.phoneButtonClicked ? plainButton : hiddenStyle;

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

          <p>Get a reminder to drop off at this location:</p>

          <h4 style={modalAddressStyles}>{this.props.address}</h4>

          <ReminderTypeSection sectionStyle={reminderTypeStyle} textButtonClick={this.handlePhoneButtonClick} />
          <PhoneInputSectionContainer visible={phoneInputVisible} />
          <button style={backButtonStyle} onClick={this.handleBackButtonClick}>
            go back
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
