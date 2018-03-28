import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

import { modalReminderWrapper } from '../styles/javascript/modalStyles';
import { ctaButton, plainButton } from '../styles/javascript/buttons';

import ReminderSuccess from './ReminderSuccess';

class TextReminder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      error: null,
    };
  }

  validateInput = input => {
    return /@/.test(input);
  };

  handleChange = event => {
    const inputValue = event.target.value;

    if (this.validateInput(inputValue)) {
      this.setState({
        error: null,
        email: event.target.value,
      });
    }
  };

  handleClick = () => {
    if (!this.validateInput(this.state.email)) {
      this.setState({
        error: 'Please enter a valid email address.',
      });
    } else {
      this.setState({
        error: null,
      });
      this.props.onClick(this.state.email);
    }
  };

  render() {
    const stlye = this.props.visible && !this.props.isCompleted ? modalReminderWrapper : { display: 'none' };

    const noteStyle = {
      textAlign: 'center',
      color: 'gray',
      fontSize: 14,
      marginBottom: 25,
      marginTop: 30,
    };

    return (
      <div>
        <div style={stlye}>
          <TextField
            id="email-field"
            type="text"
            name="email-input"
            onChange={this.handleChange.bind(this)}
            underlineFocusStyle={{ borderColor: 'black' }}
            errorText={this.state.error}
            floatingLabelText="enter your email address"
            floatingLabelFocusStyle={{ color: '#b1b1b1' }}
            style={{marginBottom: 25}}
          />

        <button style={ctaButton} onClick={this.handleClick}>
            submit
          </button>
        </div>

        <ReminderSuccess visible={this.props.visible && this.props.isCompleted} type="text"/>

      </div>
    );
  }
}

export default TextReminder;
