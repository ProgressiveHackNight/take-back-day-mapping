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

const modalHidden = {
  ...modal,
  display: 'none',
};

const modalContent = {
  backgroundColor: '#fefefe',
  margin: '15% auto',
  border: '1px solid #888',
  borderRadius: '8px',
  width: '400px',
};

const modalHeader = {
  display: 'flex',
  borderTopLeftRadius: '7px',
  borderTopRightRadius: '7px',
  color: '#4B4B4B',
};

const headerText = {
  flex: '1',
};

const closeModal = {
  color: '#00008b',
  fontSize: '28px',
  fontWeight: 'bold',
};

const modalWrapper = {
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
};

const closeButton = {
  fontSize: '18px',
  backgroundColor: '#C2C2C2',
  height: '40px',
  width: '40px',
  borderRadius: '40px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
};

const modalButtonsContainer = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-evenly',
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

export {
  modal,
  modalHidden,
  modalContent,
  modalHeader,
  headerText,
  closeModal,
  modalWrapper,
  closeButton,
  modalButtonsContainer,
  modalButtonStyle,
  modalAddressStyles,
};
