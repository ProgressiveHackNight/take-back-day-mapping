import mockData from '../mockData';

// Actual host url is set in redirects file to avoid CORS
// Will not work locally, so endpoint will just return default data from file
const jsonEndpoint = '/api/media/output.json';

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
    lat: parseFloat(location.latitude),
    lon: parseFloat(location.longitude),
  }))
);
