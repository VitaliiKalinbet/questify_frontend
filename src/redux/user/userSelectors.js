const getQuest = state => state.userData.tasks;
const userName = state =>state.userData.user?  state.userData.user.nickname :'john';
const userId = state => state.userData.user._id;

const getTodayList = state => state.userData.today;
const getTomorrowList = state => state.userData.tomorrow;
const getAllTheRestList = state => state.userData.allTheRest;
const getDoneList = state => state.userData.done;
const getAddMode = state => state.addMode;

export default {
  getQuest,
  userName,
  userId,
  getTodayList,
  getTomorrowList,
  getAllTheRestList,
  getDoneList,
  getAddMode
};
