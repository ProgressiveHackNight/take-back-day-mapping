const toGlobalState = (initialData = {}) => ({
  hover: '',
  searchInput: '',
  locations: [],
  ...initialData,
});

export default toGlobalState;
