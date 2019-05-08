import { fetchUser } from '../../services/api';
import { filter } from '../../helper/filterForData';
import { Err, Request, Success } from './userAction';
import { success } from '../auth/authAction';
import { newChallenge } from '../challenge/challengeAction';

const loginUser = user => dispatch => {
  dispatch(Request());
  return fetchUser(user)
    .then(({ data: { data } }) => {
      const getNewChallenge = data.tasks.filter(task => !task.isQuest && !task.challengeSendToUser);
      dispatch(Success(filter(data)));
      return getNewChallenge;
    })
    .then(getNewChallenge => {
      dispatch(newChallenge(getNewChallenge));
      dispatch(success());
    })
    .catch(error => dispatch(Err(error)));
};

export default {
  loginUser
};
