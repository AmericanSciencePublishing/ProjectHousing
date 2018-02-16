import axios from 'axios';

export const get = (city) =>
  axios
    .get(`/cities/${city}`)
    .then(res => res.data)