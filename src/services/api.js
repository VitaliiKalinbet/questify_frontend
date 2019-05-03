import axios from 'axios';

axios.defaults.baseURL = 'https://questify.vbguard.dev/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchUser = userNickname => axios.post('/api/login', userNickname);

export default {
  fetchUser
};
