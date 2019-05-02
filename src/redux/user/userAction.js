
import action from './actionType';

const initPayload = {
  oldQuest: { dueDate: '' },
  newQuest: { dueDate: '' },
  doneQuest: { dueDate: '' },
  savedQuest: { dueDate: '' }
};

export const Request = () => ({
  type: action.REQUEST
});

export const Success = data => {
  console.log('action data user: ', data);
  return {
    type: action.SUCCESS,
    payload: data
  };
};

export const Err = error => ({
  type: action.ERROR,
  payload: error
});

export const addQuest = newQuest => {
  console.log(newQuest);
  const hasId = () => !!(newQuest && newQuest.hasOwnProperty(`${_id}`));
  const setId = obj => {
    if (hasId) return obj._id;
    return {};
  };
  return {
    type: action.ADD_QUEST,
    payload: { ...initPayload, newQuest }
    // payload: { ...initPayload, newQuest: { ...newQuest, ...setId(newQuest) } }
  };
};

export const saveQuest = (oldQuest, savedQuest) => {
  return {
    type: action.SAVE_QUEST,
    payload: { ...initPayload, oldQuest, savedQuest: { ...oldQuest, ...savedQuest } }
  };
};

export const deleteQuest = deleteQuest => {
  return {
    type: action.DELETE_QUEST,
    payload: { ...initPayload, deleteQuest }
  };
};

export const moveToDone = questIsDone => {
  return {
    type: action.DONE_QUEST,
    payload: { ...initPayload, questIsDone: { ...questIsDone, done: true, dueDate: String(new Date()) } }
  };
};
