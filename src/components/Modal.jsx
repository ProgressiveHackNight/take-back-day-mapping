import React, { Component } from 'react';
import {
  modal,
  modalHidden,
  modalContent,
  modalHeader,
  headerText,
  closeModal,
  modalWrapper,
  closeButton,
  modalButtonsContainer,
  modalButtonStyle,
  modalAddressStyles,
} from '../styles/javascript/modalStyles';

import { phoneNumberInputDefault, phoneNumberInputHidden } from '../styles/javascript/inputStyles';

import PhoneNumberInput from './PhoneNumberInput.jsx';

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

  render() {
    const modalStyle = this.props.visible ? modal : modalHidden;
    const phoneInputStyle = this.state.phoneButtonClicked ? phoneNumberInputDefault : phoneNumberInputHidden;
    return (
      <div style={modalStyle}>
        <div style={modalContent}>
          <div style={modalWrapper}>
            <div style={modalHeader}>
              <p style={headerText}>Get a reminder to drop off at this location</p>
              <div
                onClick={() => {
                  this.props.onCloseClick();
                  this.handleCloseClick();
                }}
              >
                <span style={closeButton}>&times;</span>
              </div>
            </div>

            <h4 style={modalAddressStyles}>{this.props.address}</h4>

            <PhoneNumberInput inputStyle={phoneInputStyle} />

            <div style={modalButtonsContainer}>
              <button style={modalButtonStyle} onClick={this.handlePhoneButtonClick}>
                text
              </button>
              <button style={modalButtonStyle}>email</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
