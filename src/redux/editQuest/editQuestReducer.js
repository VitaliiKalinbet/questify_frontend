import types from './editActionTypes';

export const editQuestReducer = (state = false, { type }) => {
  switch (type) {
    case types.START_EDIT_MODE:
      return true;
    case types.FINISHED_EDIT_MODE:
      return false;
    default:
      return state;
  }
};

export default editQuestReducer;
