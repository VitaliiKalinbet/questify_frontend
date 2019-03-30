import axios from 'axios';

axios.defaults.baseURL = 'https://questify.vbguard.dev/';
axios.defaults.headers.post['Content-Type'] = 'application/json';
export const userLogin = async user => {
  try {
    const response = await axios.post('/api/login', user);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getAllQuestUser = async id => {
  try {
    const response = await axios.get(`/api/quest/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};

export default { userLogin };
