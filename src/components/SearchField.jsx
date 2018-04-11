import React from "react";
import { input } from "../styles/javascript/input";

const SearchField = ({ value, handleChange }) => {
  return (
    <input
      style={input}
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
