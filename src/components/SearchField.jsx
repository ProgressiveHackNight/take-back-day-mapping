import React, { Component } from 'react';

const SearchField = ({ value, handleChange }) => {
  return <input type="text" value={value} onChange={handleChange} />;
};

export default SearchField;
