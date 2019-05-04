const getQuest = state => state.userData.tasks;
const userName = state => (state.userData.user ? state.userData.user.nickname : 'user undefined');
const userId = state => state.userData.user._id;

const getTodayList = state => state.userData.today;
const getTomorrowList = state => state.userData.tomorrow;
const getAllTheRestList = state => state.userData.allTheRest;
const getDoneList = state => state.userData.done;
const getAddMode = state => state.addMode;

const getIsExsistActiveChallenge = state => {
  const isExsistActiveChallenge = arr => arr.find(item => item.isQuest === false);
  // const isExsistActiveChallenge = arr => arr.find(item => item.challengeSendToUser === true && item.isQuest === false);
  if (isExsistActiveChallenge(getTodayList(state))) return true;
  if (isExsistActiveChallenge(getTomorrowList(state))) return true;
  if (isExsistActiveChallenge(getAllTheRestList(state))) return true;
  return false;
};

export default {
  getQuest,
  userName,
  userId,
  getTodayList,
  getTomorrowList,
  getAllTheRestList,
  getDoneList,
  getAddMode,
  getIsExsistActiveChallenge
};
