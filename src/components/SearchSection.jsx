import React from 'react';

import { searchSectionStyle } from '../styles/javascript/searchSection';
import SearchFieldContainer from '../containers/SearchFieldContainer';

const SearchSection = () => {
  return (
    <div style={searchSectionStyle}>
      <SearchFieldContainer />
    </div>
  );
};

export default SearchSection;
