import { userLogin } from '../../utils/axiosOperetions';
import { Err, Request, Success } from './userAction';

const loginUser = user => dispatch => {
  dispatch(Request());
  userLogin(user)
    .then(response => dispatch(Success(response)))
    .catch(error => dispatch(Err(error)));
};

export default { loginUser };
