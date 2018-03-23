import { connect } from 'react-redux';

import EmailReminder from '../components/EmailReminder.jsx';
import handleEmailInput from '../actions/handleEmailInput';

const mapDispatchToProps = dispatch => ({
  onPhoneButtonClick: input => dispatch(handleEmailInput(input)),
});

const EmailReminderContainer = connect(null, mapDispatchToProps)(EmailReminder);

export default EmailReminderContainer;
