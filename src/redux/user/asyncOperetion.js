import { userLogin } from '../../utils/axiosOperetions';
import { tomorrow, today, allTheRest, filter } from '../../helper/filterForData';
import { Err, Request, Success } from './userAction';
import { success } from '../auth/authAction';

const loginUser = user => dispatch => {
  dispatch(Request());
  return userLogin(user)
    .then(({ data: { data } }) => {
      console.log(data);
      dispatch(Success(filter(data)));
    })
    .then(() => dispatch(success()))
    .catch(error => dispatch(Err(error)));
};

export default { loginUser };
