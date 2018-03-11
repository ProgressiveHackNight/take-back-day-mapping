import types from '../actionTypes';

const handleSearchInput = event => dispatch => {
  const searchInput = event.target.value;
  console.log('inside handleSearchInput');
  return dispatch({
    type: types.UPDATE_SEARCH_VALUE,
    payload: searchInput,
  });
};

export default handleSearchInput;
