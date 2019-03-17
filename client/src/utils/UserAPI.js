import axios from 'axios';

/* Get */

export const checkUser = () =>
  axios
    .get(`/checkUser/`)


export const logIn = (logInfo) =>
  axios
    .post(`/log_in`,logInfo)


export const put = (id) =>
  axios
    .put(`/online/${id}`)

export const offline = (id) =>
	axios
		.put(`/offline/${id}`)

export const getUser = () =>
	axios
		.get('/api/current_user')
	  .then(res => res.data)

/* Post */

export const sign = (info) => 
	axios
		.post('/sign_up', info)

export const resetEmail = (link,info) =>
	axios
		.put(`/resetpwdemail/${link}`, info)