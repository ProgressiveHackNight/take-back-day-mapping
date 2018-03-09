import { connect } from 'react-redux';

import SearchField from '../components/SearchField.jsx';

const mapStateToProps = state => ({
  value: state.searchValue,
});

const mapDispatchToProps = state => ({
  handleChange: () => dispatch(handleChange),
});

const SearchFieldContainer = connect()(SearchField);

export default SearchFieldContainer;
