import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const SearchField = ({ value, handleChange }) => {
  return (
    <TextField
      id="phone-field"
      type="text"
      name="phone-input"
      value={value}
      onChange={handleChange}
      underlineFocusStyle={{ borderColor: '#d6d6d6' }}
      floatingLabelText="search by city, zip, or location name"
      floatingLabelFocusStyle={{ color: '#4b4b4b' }}
    />
  );
};

export default SearchField;
