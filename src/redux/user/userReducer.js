import action from './actionType';
import authAction from '../auth/authActionType';
import { setNameOfArr } from '../../helper/filterForData';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case action.SUCCESS:
      return payload;

    case action.ADD_QUEST:
      const newQuestDate = new Date();
      return {
        ...state,
        [setNameOfArr(newQuestDate)]: [payload.newQuest, ...state[setNameOfArr(newQuestDate)]]
      };

    case action.DELETE_QUEST:
      const { dueDate: deleteQuestDate = new Date() } = payload.deleteQuest;
      const arr = state[`${setNameOfArr(deleteQuestDate)}`];
      return {
        ...state,
        [setNameOfArr(deleteQuestDate)]: arr.filter(item => item._id !== payload.deleteQuest.id)
      };

    case action.SAVE_QUEST:
      console.log(payload);
      const { dueDate: oldQuestDate = new Date() } = payload.oldQuest;
      const { dueDate: savedQuestDate = new Date() } = payload.savedQuest;
      const oldArr = state[`${setNameOfArr(oldQuestDate)}`];
      console.log(setNameOfArr(oldQuestDate), setNameOfArr(savedQuestDate));
      console.log(oldQuestDate, savedQuestDate);
      if (setNameOfArr(oldQuestDate) === setNameOfArr(savedQuestDate)) {
        return {
          ...state,
          ...{
            [setNameOfArr(oldQuestDate)]: oldArr.map(item =>
              item._id === payload.oldQuest._id ? payload.savedQuest : item
            )
          }
        };
      }
      return {
        ...state,
        ...{ [setNameOfArr(oldQuestDate)]: oldArr.filter(item => item._id !== payload.oldQuest._id) },
        ...{ [setNameOfArr(savedQuestDate)]: [...state[setNameOfArr(savedQuestDate)], payload.savedQuest] }
      };

    case action.DONE_QUEST:
      const { dueDate: doneQuestDate = new Date() } = payload.questIsDone.dueDate;
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
