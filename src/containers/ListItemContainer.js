import { connect } from 'react-redux';

import ListItem from '../components/ListItem.jsx';
import { handleRsvpClick } from '../actions/handleRsvpClick';

const mapDispatchToProps = (dispatch, props) => ({
  handleRsvpClick: () => dispatch(handleRsvpClick(props.address)),
});

const ListItemContainer = connect(null, mapDispatchToProps)(ListItem);

export default ListItemContainer;