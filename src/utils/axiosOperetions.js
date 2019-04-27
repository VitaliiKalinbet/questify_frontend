import axios from 'axios';

// axios.defaults.baseURL = 'https://questify.vbguard.dev';
axios.defaults.baseURL = 'http://localhost:5000/';

export const userLogin = user => {
  return axios.post('/api/login', user);
};

export const send = user =>
  fetch('https://questify.vbguard.dev/api/login', {
    method: 'post',
    body: JSON.stringify(user)
  });

export default { userLogin, send };
