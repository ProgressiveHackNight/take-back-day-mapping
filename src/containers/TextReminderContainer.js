import { connect } from 'react-redux';

import TextReminder from '../components/TextReminder.jsx';
import handlePhoneInput from '../actions/handlePhoneInput';

const mapDispatchToProps = dispatch => ({
  onPhoneButtonClick: input => dispatch(handlePhoneInput(input)),
});

const TextReminderContainer = connect(null, mapDispatchToProps)(TextReminder);

export default TextReminderContainer;
