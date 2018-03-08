import types from '../actionTypes';

export default function hover(state = {}, { type }) {
  switch (type) {
    case types.CHANGE_LOCATION_HOVER:
      console.log('FETCH_STUFF Action');
    default:
      return state;
  }
}
