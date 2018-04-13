import React from "react";

import { searchSectionStyle } from "../styles/javascript/searchSection";
import SearchFieldContainer from "../containers/SearchFieldContainer";

const SearchSection = ({ onKeyUp }) => {
  return (
    <div style={searchSectionStyle}>
      <SearchFieldContainer onKeyUp={onKeyUp} />
    </div>
  );
};

export default SearchSection;
