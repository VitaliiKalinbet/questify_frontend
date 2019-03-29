export const typeAction = {
  CREATE_QUEST_REQUEST: ' createQuestButton/REQUEST  ',
  CREATE_QUEST_ACCESS: ' createQuestButton/ACCESS ',
  CREATE_QUEST_ERROR: ' createQuestButton/ERROR '
};

export const request = () => ({
  type: typeAction.CREATE_QUEST_REQUEST
});

export const access = () => ({
  type: typeAction.CREATE_QUEST_ACCESS
});

export const error = er => ({
  type: typeAction.CREATE_QUEST_ERROR,
  payload: er
});
