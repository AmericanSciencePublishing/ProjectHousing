import axios from 'axios';

export const get = (tag) =>
  axios
    .get(`/houses/${tag}`)
    .then(res => res.data)

export const search = (tag) =>
  axios
    .get(`/search${tag}`)
    .then(res => res.data)

export const getList = (idList) =>
	axios
    .post(`/houses/idList`,{'idList':idList})