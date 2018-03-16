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
} from '../styles/javascript/RsvpModalStyles';

class RsvpModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const modalStyle = this.props.visible ? modal : modalHidden;
    return (
      <div style={modalStyle}>
        <div style={modalContent}>
          <div style={modalWrapper}>
            <div style={modalHeader}>
              <p style={headerText}>Get a reminder to drop off at this location</p>
              <div onClick={this.props.onCloseClick}>
                <span style={closeButton}>&times;</span>
              </div>
            </div>
            <h4 style={modalAddressStyles}>{this.props.address}</h4>
            <div style={modalButtonsContainer}>
              <button style={modalButtonStyle}>text</button>
              <button style={modalButtonStyle}>email</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RsvpModal;
