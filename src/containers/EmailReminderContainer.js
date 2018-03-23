import { connect } from 'react-redux';

import EmailReminder from '../components/EmailReminder.jsx';
import handleEmailInput from '../actions/handleEmailInput';

const mapStateToProps = state => ({
  isCompleted: state.reminders.email,
})

const mapDispatchToProps = dispatch => ({
  onClick: input => dispatch(handleEmailInput(input)),
});

const EmailReminderContainer = connect(mapStateToProps, mapDispatchToProps)(EmailReminder);

export default EmailReminderContainer;
