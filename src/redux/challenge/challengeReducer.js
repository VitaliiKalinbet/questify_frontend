import { types } from './challengeAction';

const challengeReducer = (state = false, { type, payload }) => {
  switch (type) {
    case types.IS_NEW_CHALLENGE:
      return payload;
    default:
      return state;
  }
};

export default challengeReducer;
