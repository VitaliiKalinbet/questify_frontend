import axios from 'axios';

// axios.defaults.baseURL = 'https://questify.vbguard.dev/api';
axios.defaults.baseURL = 'http://localhost:5000/api';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export const fetchUser = userNickname => axios.post('/login', userNickname);

export const fetchNewQuest = quest => axios.post('/quests', quest);

export const fetchUpdateQuest = ({ updateFields, questId }) => axios.put(`/quests/${questId}`, updateFields);

export const fetchDeleteQuest = questId => axios.delete(`/quests/${questId}`);

export const fetchUpdateChallenge = ({ challengeId, updateFields }) => axios.put(`/challenges/${challengeId}`, updateFields);



export default {
  fetchUser,
  fetchNewQuest,
  fetchUpdateQuest,
  fetchDeleteQuest,
  fetchUpdateChallenge
};
