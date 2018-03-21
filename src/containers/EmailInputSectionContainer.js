import { connect } from 'react-redux';

import EmailInputSection from '../components/EmailInputSection.jsx';
import handleEmailInput from '../actions/handleEmailInput';

const mapDispatchToProps = dispatch => ({
  onPhoneButtonClick: input => dispatch(handleEmailInput(input)),
});

const EmailInputSectionContainer = connect(null, mapDispatchToProps)(EmailInputSection);

export default EmailInputSectionContainer;
