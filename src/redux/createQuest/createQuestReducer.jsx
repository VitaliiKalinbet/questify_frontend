const types = {
  START_ADD_MODE: 'createQuest/START_ADD_MODE',
  FINISHED_ADD_MODE: 'createQuest/FINISHED_ADD_MODE'
};

export const startAddMode = () => ({
  type: types.START_ADD_MODE
});

export const finishAddMode = () => ({
  type: types.FINISHED_ADD_MODE
});

export const createQuestReducer = (state = false, { type }) => {
  switch (type) {
    case types.START_ADD_MODE:
      return true;
    case types.FINISHED_ADD_MODE:
      return false;
    default:
      return state;
  }
};

export default { startAddMode, finishAddMode, createQuestReducer };
