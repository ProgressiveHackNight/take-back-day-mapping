import axios from 'axios';

export const addReminder = reminder => (
  axios.post('/api/add_reminder', reminder)
    .then(response => (
      response.status === 200
    ))
    .catch(() => false)
);
