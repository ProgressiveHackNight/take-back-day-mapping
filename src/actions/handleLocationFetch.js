import types from '../actionTypes';
import { fetchLocations } from '../gateways/locations';

const handleLocationFetch = () => dispatch => {
  return fetchLocations()
    .then(locations => {
      return dispatch({
        type: types.FETCH_LOCATIONS,
        payload: locations,
      });
    }
)};
export { handleLocationFetch };
