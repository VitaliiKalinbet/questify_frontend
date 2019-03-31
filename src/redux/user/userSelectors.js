const getQuest = state => state.userData.tasks;
const userName = state => state.user.nickname;
const userId = state => state.user.id;
<<<<<<< HEAD
const getTodayList = state => state.userData.today;
const getTomorrowList = state => state.userData.tomorrow;
const getAllTheRestList = state => state.userData.allTheRest;
const getDoneList = state => state.userData.done;
=======
const getAddMode = state => state.addMode;

>>>>>>> dev
// const todayQuest = state => {
//   const questArr = getQuest(state).filter()
// }

<<<<<<< HEAD
export default { getQuest, userName, userId, getTodayList, getTomorrowList, getAllTheRestList, getDoneList };
=======
export default { getQuest, userName, userId, getAddMode };
>>>>>>> dev
