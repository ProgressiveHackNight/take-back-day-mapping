import { connect } from "react-redux";
import LocationsList from "../components/LocationsList";
import getLocations from "../selectors/getLocations";

const mapStateToProps = state => ({
  locations: getLocations(state),
});

const LocationsListContainer = connect(mapStateToProps)(LocationsList);

export default LocationsListContainer;
