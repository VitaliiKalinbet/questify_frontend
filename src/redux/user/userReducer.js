import action from './actionType';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case action.SUCCESS:
      return payload || 'success';
    case action.ERROR:
      return payload || 'error';
    default:
      return state;
  }
};

export default user;
