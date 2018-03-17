const listSection = {
  paddingLeft: 40,
};

const listContainerStyle = {
  height: '450px',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
};

const listItemStyle = {
  paddingTop: 10,
  paddingBottom: 30,
  height: 130,
  borderBottom: '0.5px solid rgba(0, 0, 0, 0.27)',
};

const listItemHoverStyle = {
  ...listItemStyle,
  backgroundColor: '#EFEFEF',
};

const listButtonStyle = {
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

export { listSection, listContainerStyle, listStyle, listItemStyle, listItemHoverStyle, listButtonStyle };
