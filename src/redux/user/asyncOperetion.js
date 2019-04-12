import { userLogin } from '../../utils/axiosOperetions';
import { tomorrow, today, allTheRest } from '../../helper/gatDate';
import { Err, Request, Success } from './userAction';
import { success } from '../auth/authAction';

const loginUser = user => dispatch => {
  dispatch(Request());
  return userLogin(user)
    .then(({ data: { data } }) => {
      console.log(data);
      const { tasks, user } = data;

      const done = tasks.filter(task => task.done);
      const doneFalse = tasks.filter(task => !task.done);
      const todayArr = today(doneFalse);
      console.log(todayArr);
      const tomorrowArr = tomorrow(doneFalse);
      console.log(tomorrowArr);
      const allTheRestArr = allTheRest(doneFalse);
      console.log(allTheRestArr);
      dispatch(Success({user: user, today: todayArr, tomorrow: tomorrowArr, allTheRest: allTheRestArr, done }));
    })
    .then(() => dispatch(success()))
    .catch(error => dispatch(Err(error)));
};

export default { loginUser };
