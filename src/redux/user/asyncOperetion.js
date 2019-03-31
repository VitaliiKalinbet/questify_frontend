import { userLogin } from '../../utils/axiosOperetions';

import { Err, Request, Success } from './userAction';
import { success } from '../auth/authAction';

const loginUser = user => dispatch => {
  dispatch(Request());
  return userLogin(user)
    .then(response => dispatch(Success(response.data.data)))
    .then(() => dispatch(success()))
    .catch(error => dispatch(Err(error)));
};

export default { loginUser };
