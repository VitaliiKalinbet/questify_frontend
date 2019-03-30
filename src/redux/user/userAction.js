import action from './actionType';

export const Request = () => ({
  type: action.REQUEST
});

export const Success = data => ({
  type: action.SUCCESS,
  payload: data
});

export const Err = error => ({
  type: action.ERROR,
  payload: error
});

export default {
  Request,
  Success,
  Err
};
