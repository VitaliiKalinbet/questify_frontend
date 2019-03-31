import action from './actionType';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case action.SUCCESS:
      return payload;
    case action.ADD_QUEST:
      return {
        ...state,
        today: [ payload.newQuest, ...state.today ]
      };
    case action.ERROR:
      return { error: payload };
    default:
      return state;
  }
};

export default user;
