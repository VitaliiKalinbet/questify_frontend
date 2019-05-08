export const types = {
  IS_EDIT_MODE: 'card/IS_EDIT_MODE'
};

export const startEditMode = editMode => ({
  type: types.IS_EDIT_MODE,
  payload: editMode
});
