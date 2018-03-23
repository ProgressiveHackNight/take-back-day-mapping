import { connect } from 'react-redux';

import TextReminder from '../components/TextReminder.jsx';
import handlePhoneInput from '../actions/handlePhoneInput';

const mapStateToProps = state => ({
  isCompleted: state.reminders.text,
})

const mapDispatchToProps = dispatch => ({
  onPhoneButtonClick: input => dispatch(handlePhoneInput(input)),
});

const TextReminderContainer = connect(mapStateToProps, mapDispatchToProps)(TextReminder);

export default TextReminderContainer;
