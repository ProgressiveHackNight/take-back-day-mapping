import React from "react";
import { input } from "../styles/javascript/input";

const SearchField = ({ value, handleChange, onKeyUp }) => {
  return (
    <input
      style={input}
      id="search-field"
      type="text"
      name="search-input"
      value={value}
      onChange={handleChange}
      placeholder="city, zip, or location name"
      onKeyUp={onKeyUp}
    />
  );
};

export default SearchField;
