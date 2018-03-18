import { combineReducers } from 'redux';
import hover from './hover';
import searchInput from './searchInput';
import selectedLocation from './selectedLocation';
import entries from './entries';

const rootReducer = combineReducers({
  hover,
  searchInput,
  selectedLocation,
  entries,
});

export default rootReducer;
