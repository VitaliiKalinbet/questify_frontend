const getQuest = state => state.userData.quests;
const userName = state => state.user.nickname;
const userId = state => state.user.id;

// const todayQuest = state => {
//   const questArr = getQuest(state).filter()
// }

export default { getQuest, userName, userId };
