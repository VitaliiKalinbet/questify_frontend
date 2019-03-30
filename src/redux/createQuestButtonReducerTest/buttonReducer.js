import { typeAction } from './actionButton';

const creatQuest = (state = null, { type, payload }) => {
  switch (type) {
    case typeAction.CREATE_QUEST_ACCESS:
      return 'its work';
    case typeAction.CREATE_QUEST_ERROR:
      return payload;
    default:
      return state;
  }
};

export default creatQuest;
