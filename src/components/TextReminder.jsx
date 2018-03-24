import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import shouldPureComponentUpdate from 'react-pure-render/function';

import { modalButtonStyle, plainButton, TextReminderWrapper, successIcon, successSection } from '../styles/javascript/modalStyles';

import ReminderSuccess from './ReminderSuccess';

class TextReminder extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

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

  handleSubmit = () => {
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
    const inputSectionStyle = this.props.visible && !this.props.isCompleted ? TextReminderWrapper : { display: 'none' };

    return (
      <div>
        <div style={inputSectionStyle}>
          <TextField
            id="phone-field"
            type="text"
            name="phone-input"
            onChange={this.handleChange.bind(this)}
            underlineFocusStyle={{ borderColor: 'black' }}
            errorText={this.state.error}
            floatingLabelText="enter phone number"
            floatingLabelFocusStyle={{ color: '#b1b1b1' }}
          />

          <button style={modalButtonStyle} onClick={this.handleSubmit}>
            submit
          </button>
        </div>

        <ReminderSuccess visible={this.props.visible && this.props.isCompleted} type="text"/>
      </div>
    );
  }
}

export default TextReminder;
