import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import { modalButtonStyle, plainButton, phoneInputSectionWrapper } from '../styles/javascript/modalStyles';

class PhoneInputSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      phone: '',
      error: null,
    };
  }

  validateInput = input => {
    // is a number or empty string
    return /^[0-9]\d*$|^$/.test(input) && input.length < 11;
  };

  handleChange = event => {
    const inputValue = event.target.value;

    if (this.validateInput(inputValue)) {
      this.setState({
        error: null,
        phone: event.target.value,
      });
    }
  };

  handleClick = () => {
    if (this.state.phone.length < 10) {
      this.setState({
        error: 'Please enter a 10-digit phone number (with area code)',
      });
    } else if (this.state.phone.length === 10) {
      this.setState({
        error: null,
      });
      this.props.onPhoneButtonClick(this.state.phone);
    }
  };

  render() {
    const stlye = this.props.visible ? phoneInputSectionWrapper : { display: 'none' };
    const noteStyle = {
      textAlign: 'center',
      color: 'gray',
      fontSize: 14,
      margin: 25,
    };

    return (
      <div style={stlye}>
        <TextField
          id="phone-field"
          type="text"
          name="phone-input"
          value={this.state.phone}
          onChange={this.handleChange.bind(this)}
          underlineFocusStyle={{ borderColor: '#69C109' }}
          errorText={this.state.error}
          floatingLabelText="enter phone number"
          floatingLabelFocusStyle={{ color: '#b1b1b1' }}
        />
        <p style={noteStyle}>
          We'll send you a text reminder on Take Back Day with this address and drop-off instructions
        </p>
        <button style={modalButtonStyle} onClick={this.handleClick}>
          submit
        </button>
      </div>
    );
  }
}

export default PhoneInputSection;
