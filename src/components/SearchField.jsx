import React, { Component } from 'react';
import TextField from 'material-ui/TextField';

const inputStyle = {
  width: '98%',
  borderRadius: 60,
  border: '1px solid #dedede',
  lineHeight: 2.5,
  paddingLeft: 20,
  fontSize: 14,
  letterSpacing: '0.05em',
  marginBottom: 10,
}

const SearchField = ({ value, handleChange }) => {
  return (
    <input
      style={inputStyle}
      id="phone-field"
      type="text"
      name="phone-input"
      value={value}
      onChange={handleChange}
      placeholder="city, zip, or location name"
    />
  );
};

export default SearchField;
