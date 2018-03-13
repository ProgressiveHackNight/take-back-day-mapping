import { combineReducers } from 'redux';
import hover from './hover';
import searchInput from './searchInput';
import selectedLocation from './selectedLocation';

const rootReducer = combineReducers({
  hover,
  searchInput,
  selectedLocation,
});

export default rootReducer;
