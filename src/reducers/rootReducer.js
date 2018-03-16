import { combineReducers } from 'redux';
import hover from './hover';
import searchInput from './searchInput';
import selectedLocation from './selectedLocation';
import entries from './entries';
import locations from './locations';

const rootReducer = combineReducers({
  hover,
  searchInput,
  selectedLocation,
  entries,
  locations,
});

export default rootReducer;
