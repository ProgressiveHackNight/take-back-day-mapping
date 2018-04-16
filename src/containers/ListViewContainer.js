import { connect } from "react-redux";

import ListView from "../components/ListView";

const mapStateToProps = state => ({
  searchInput: state.searchInput,
});

const ListViewContainer = connect(mapStateToProps)(ListView);

export default ListViewContainer;
