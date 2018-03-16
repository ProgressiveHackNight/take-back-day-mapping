import mockData from '../mockData';

const jsonEndpoint = 'https://takebackday.infoloom.com/media/output.json';

export const fetchLocations = () => (
 fetch(jsonEndpoint)
   .then(resp => resp.json())
   .then(resp => toLocations(resp))
   .catch(() => toLocations(mockData))
);

export const toLocations = (apiLocations) => (
  apiLocations.map((location, idx) => ({
    id: idx,
    name: location.name,
    type: location.type,
    location: location.address,
    lat: location.latitude,
    lon: location.longitude,
  }))
);
