import types from './authActionType';

const authReducer = (state = false, { type }) => {
  switch (type) {
    case types.SUCCESS:
      return true;
    case types.LOGOUT:
      return false;
    default:
      return state;
  }
};

export default authReducer;
