import types from './editActionTypes';

export const startEditMode = () => ({
  type: types.START_EDIT_MODE
});

export const finishEditMode = () => ({
  type: types.FINISHED_EDIT_MODE
});
