import action from './actionType';
import authAction from '../auth/authActionType';
const user = (state = null, { type, payload }) => {
  switch (type) {
    case action.SUCCESS:
      return payload;
    case action.ADD_QUEST:
      return {
        ...state,
        today: [payload.newQuest, ...state.today]
      };
    case action.ERROR:
      return { error: payload };
    case authAction.LOGOUT:
      return null;
    default:
      return state;
  }
};

export default user;
