import action from './actionType';
import authAction from '../auth/authActionType';
import { getDay } from '../../helper/filterForData';

const setNameOfArr = date => {
  if (getDay(date) === 'today') return 'today';
  if (getDay(date) === 'tomorrow') return 'tomorrow';
  return 'allTheRest';
};

const user = (state = null, { type, payload }) => {
  switch (type) {
    case action.SUCCESS:
      return payload;
    case action.ADD_QUEST:
      const { dueDate: newQuestDate } = payload.newQuest;
      return {
        ...state,
        [setNameOfArr(newQuestDate)]: [payload.newQuest, ...state[setNameOfArr(newQuestDate)]]
      };

    case action.SAVE_QUEST:
      console.log(payload);
      const { dueDate: oldQuestDate } = payload.oldQuest;
      const { dueDate: savedQuestDate } = payload.savedQuest;
      const oldArr = state[`${setNameOfArr(oldQuestDate)}`];
      console.log(oldArr);
      return {
        ...state,
        ...{ [setNameOfArr(savedQuestDate)]: [payload.savedQuest, ...state[setNameOfArr(savedQuestDate)]] },
        ...{ [setNameOfArr(oldQuestDate)]: oldArr.filter(item => item._id !== payload.oldQuest._id) }
      };

    case action.DONE_QUEST:
      const { dueDate: doneQuestDate } = payload.questIsDone.dueDate;
      const currentArr = state[`${setNameOfArr(doneQuestDate)}`];
      return {
        ...state,
        [setNameOfArr(doneQuestDate)]: currentArr.filter(item => item._id !== payload.questIsDone._id),
        done: [...state.done, payload.questIsDone]
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
