import { connect } from 'react-redux';
import SearchField from '../components/SearchField';

import handleSearchInput from '../actions/handleSearchInput';

const mapStateToProps = (state, props) => ({
  value: state.searchValue,
});

const mapDispatchToProps = dispatch => ({
  handleChange: event => dispatch(handleSearchInput(event)),
});

const SearchFieldContainer = connect(mapStateToProps, mapDispatchToProps)(SearchField);

export default SearchFieldContainer;
