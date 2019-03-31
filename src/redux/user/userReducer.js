import action from './actionType';

const user = (state = null, { type, payload }) => {
  switch (type) {
    case action.SUCCESS:
      return payload;
    case action.ERROR:
      return { error: payload };
    default:
      return state;
  }
};

export default user;
