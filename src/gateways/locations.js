import mockData from '../mockData';

export const fetchLocations = () => (
 toLocations(mockData)
);

const toLocations = (apiLocations) => (
  apiLocations.map((location, idx) => ({
    id: idx,
    name: location.name,
    type: location.type,
    location: location.address,
    lat: location.latitude,
    lon: location.longitude,
  }))
);
