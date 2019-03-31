import action from './actionType';

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
  return {
    type: action.ADD_QUEST,
    payload: {
      newQuest
    }
  };
};
