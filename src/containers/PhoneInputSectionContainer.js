import { connect } from 'react-redux';

import PhoneInputSection from '../components/PhoneInputSection';
import handlePhoneInput from '../actions/handlePhoneInput';

const mapDispatchToProps = dispatch => ({
  onPhoneButtonClick: input => dispatch(handlePhoneInput(input)),
});

const PhoneInputSectionContainer = connect(null, mapDispatchToProps)(PhoneInputSection);

export default PhoneInputSectionContainer;
