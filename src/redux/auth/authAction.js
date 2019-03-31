import type from './authActionType';

export const success = () => ({
  type: type.SUCCESS,
  payload: true
});

export const logout = () => ({
  type: type.LOGOUT,
  payload: false
});

export const err = error => ({
  type: type.ERROR,
  payload: error
});

export default { success, logout, err };
