const getQuest = state => state.userData.tasks;
const userName = state => state.user.nickname;
const userId = state => state.user.id;
const getAddMode = state => state.addMode;

// const todayQuest = state => {
//   const questArr = getQuest(state).filter()
// }

export default { getQuest, userName, userId, getAddMode };
