import axios from 'axios';

axios.defaults.baseURL = 'https://questify.vbguard.dev/';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const loginUser = userNickname => {
  axios
    .post('/api/login', userNickname)
    .then(resp => console.log(resp))
    .catch(err => console.log(err));
};

export default { loginUser };
