const modal = {
  display: 'block',
  position: 'fixed',
  zIndex: '1',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgb(0,0,0)',
  backgroundColor: 'rgba(0,0,0,0.4)',
};

const modalWrapper = {
  backgroundColor: '#fefefe',
  margin: '15% auto',
  border: '1px solid #888',
  borderRadius: '8px',
  width: '400px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '15px',
};

const closeButtonWrapper = {
  alignSelf: 'flex-end',
  marginTop: '15px',
  marginRight: '15px',
};

const closeButton = {
  fontSize: '16px',
  backgroundColor: '#C2C2C2',
  height: '30px',
  width: '30px',
  borderRadius: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
};

const modalButtonsContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
  marginTop: 15,
  marginBottom: 10,
};

const modalButtonStyle = {
  backgroundColor: '#69C109',
  color: 'white',
  borderRadius: '22.5px',
  height: '40px',
  width: '122px',
  fontFamily: 'Avenir',
  fontSize: '18px',
  fontWeight: 'bold',
  border: 'none',
};

const modalAddressStyles = {
  color: '#4B4B4B',
  fontSize: 18,
  fontFamily: 'Avenir',
  fontWeight: 'bold',
};

const reminderText = {
  marginBottom: 30,
  color: '#4B4B4B',
  fontSize: '16px',
};

const phoneInputSectionWrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const plainButton = {
  background: 'none',
  color: 'black',
  textDecoration: 'underline',
  fontWeight: 'bold',
  border: 'none',
  margin: 0,
  padding: 0,
  display: 'block',
};

export {
  modal,
  modalWrapper,
  closeButton,
  closeButtonWrapper,
  plainButton,
  modalButtonsContainer,
  modalButtonStyle,
  modalAddressStyles,
  reminderText,
  phoneInputSectionWrapper,
};
