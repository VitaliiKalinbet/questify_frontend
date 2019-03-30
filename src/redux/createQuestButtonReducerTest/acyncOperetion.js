import * as action from './actionButton';

const createQuest = () => dispatch => {
  dispatch(action.request());
  dispatch(action.access());
  dispatch(action.error('err'));
};

export default { createQuest };
