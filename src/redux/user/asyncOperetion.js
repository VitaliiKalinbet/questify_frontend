import {
  fetchUser
} from '../../services/api';
import {
  filter
} from '../../helper/filterForData';
import {
  Err,
  Request,
  Success
} from './userAction';
import {
  success
} from '../auth/authAction';

const loginUser = user => dispatch => {
  dispatch(Request());
  return fetchUser(user)
    .then(({
      data: {
        data
      }
    }) => {
      dispatch(Success(filter(data)));
    })
    .then(() => dispatch(success()))
    .catch(error => dispatch(Err(error)));
};

export default {
  loginUser
};
