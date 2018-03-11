const listContainerStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'auto',
};

const listStyle = {
  listStyle: 'none',
};

const listItemStyle = {
  marginBottom: 15,
  paddingTop: 10,
  paddingBottom: 30,
  height: 90,
  borderBottom: '1px dotted #000000',
};

const listItemHoverStyle = {
  ...listItemStyle,
  backgroundColor: 'white',
};

export { listContainerStyle, listStyle, listItemStyle, listItemHoverStyle };
