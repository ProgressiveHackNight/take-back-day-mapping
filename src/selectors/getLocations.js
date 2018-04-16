const getLocations = state => {
  if (state.searchInput) {
    return state.locations.filter(event => {
      const eventName = event.name.toLowerCase();
      const eventAddress = event.location.toLowerCase();
      const searchInput = state.searchInput.toLowerCase();
      return (
        eventName.indexOf(searchInput) !== -1 ||
        eventAddress.indexOf(searchInput) !== -1 ||
        null
      );
    });
  }
  return state.locations;
};

export default getLocations;
