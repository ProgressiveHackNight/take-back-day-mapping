import { combineReducers } from 'redux';
import hover from './hover';
import searchInput from './searchInput';

const rootReducer = combineReducers({
  hover,
  searchInput,
});

export default rootReducer;
