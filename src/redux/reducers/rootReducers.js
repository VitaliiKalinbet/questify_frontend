import { combineReducers } from 'redux';
// тут импортируете все редюсеры
import { userReducer } from '../user';
import auth from '../auth/authReducer';

const rootReducer = combineReducers({
  userData: userReducer,
  isAuthenticated: auth
  // тут используете импортируемые редюсеры туgit
});

export default rootReducer;
