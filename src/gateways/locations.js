import locationData from '../locationdata';

// const jsonEndpoint = 'https://takebackday.infoloom.com/media/output.json';

export const fetchLocations = () => (
 // fetch(jsonEndpoint)
  //   .then(resp => resp.json())
  //   .then(resp => toLocations(resp))
  //   .catch(() => toLocations(locationData))
  Promise.resolve(toLocations(locationData))
);

export const toLocations = (apiLocations) => (
  apiLocations.map((location, idx) => ({
    id: idx,
    name: location.name,
    type: location.type,
    location: location.address,
    lat: location.latitude && parseFloat(location.latitude),
    lon: location.longitude && parseFloat(location.longitude),
  }))
);
