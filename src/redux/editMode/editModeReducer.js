import { types } from './editModeAction';

const editModeReducer = (state = false, { type, payload }) => {
  switch (type) {
    case types.IS_EDIT_MODE:
      return payload;
    default:
      return state;
  }
};

export default editModeReducer;
