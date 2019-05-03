import action from './actionType';

const initPayload = {
  oldQuest: {
    dueDate: ''
  },
  newQuest: {
    dueDate: ''
  },
  doneQuest: {
    dueDate: ''
  },
  savedQuest: {
    dueDate: ''
  }
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

export const addQuest = newQuest => dispatch => {
  dispatch({
    type: action.ADD_QUEST,
    payload: {
      ...initPayload,
      newQuest
    }
  });
};

export const saveQuest = (oldQuest, savedQuest) => dispatch => {
  console.log(oldQuest, savedQuest);
  // dispatch(axios);
  dispatch({
    type: action.SAVE_QUEST,
    payload: {
      ...initPayload,
      oldQuest,
      savedQuest: {
        ...oldQuest,
        ...savedQuest
      }
    }
  });
};

export const deleteQuest = deleteQuest => dispatch => {
  dispatch({
    type: action.DELETE_QUEST,
    payload: {
      ...initPayload,
      deleteQuest
    }
  });
};

export const moveToDone = questIsDone => dispatch => {
  dispatch({
    type: action.DONE_QUEST,
    payload: {
      ...initPayload,
      questIsDone: {
        ...questIsDone,
        done: true
      }
    }
  });
};
