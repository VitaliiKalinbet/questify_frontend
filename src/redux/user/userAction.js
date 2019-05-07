import action from './actionType';
import api from '../../services/api';

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
  api
    .fetchNewQuest({
      dueDate: newQuest.dueDate,
      name: newQuest.name,
      group: newQuest.group,
      difficulty: newQuest.difficulty,
      userId: newQuest.userId
    })
    .then(res => {
      const data = res.data;
      const getCreatedQuest = data.quest;
      dispatch({
        type: action.ADD_QUEST,
        payload: {
          ...initPayload,
          newQuest: getCreatedQuest
        }
      });
    });
};

export const saveQuest = (oldQuest, savedQuest) => dispatch => {
  console.log(savedQuest);
  if (!savedQuest.isQuest) {
    api
      .fetchUpdateChallenge({
        challengeId: oldQuest._id,
        updateFields: savedQuest
      })
      .then(res => {
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
      });
  }
  if (oldQuest.isQuest) {
    api.fetchUpdateQuest({ updateFields: savedQuest, questId: oldQuest._id }).then(res => {
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
    });
  }
};

export const deleteQuest = ({ deleteQuest, userId }) => dispatch => {
  console.log(deleteQuest);
  console.log(userId);
  if (!deleteQuest.isQuest) {
    api
      .fetchUpdateChallenge({
        updateFields: {
          challengeSendToUser: false
        },
        userId,
        challengeId: deleteQuest.id
      })
      .then(res => {
        dispatch({
          type: action.DELETE_QUEST,
          payload: {
            ...initPayload,
            deleteQuest
          }
        });
      });
  }

  if (deleteQuest.isQuest) {
    api.fetchDeleteQuest(deleteQuest.id).then(res => {
      dispatch({
        type: action.DELETE_QUEST,
        payload: {
          ...initPayload,
          deleteQuest
        }
      });
    });
  }
};

export const moveToDone = ({questIsDone, userId}) => dispatch => {
  console.log(userId);
  if (!questIsDone.isQuest) {
    api
      .fetchUpdateChallenge({
        updateFields: {
          challengeSendToUser: true,
          done: true
        },
        userId,
        challengeId: questIsDone._id
      })
      .then(res => {
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
      });
  }
  if (questIsDone.isQuest) {
    api.fetchUpdateQuest({ updateFields: { done: true }, questId: questIsDone._id }).then(res => {
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
    });
  }
};
