import axios from 'axios';

axios.defaults.baseURL = 'https://questify.vbguard.dev';
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';

export const userLogin = user => {
  return axios.post('/api/login', user);
};

export const send = user =>
  fetch('https://questify.vbguard.dev/api/login', {
    method: 'post',
    body: JSON.stringify(user)
  });

export default { userLogin, send };
