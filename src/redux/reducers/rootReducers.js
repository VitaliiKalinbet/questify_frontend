import { combineReducers } from 'redux';
// тут импортируете все редюсеры
import { userReducer } from '../user';
import auth from '../auth/authReducer';
import { createQuestReducer } from '../createQuest/createQuestReducer';

const rootReducer = combineReducers({
  userData: userReducer,
  isAuthenticated: auth,
  addMode: createQuestReducer
  // тут используете импортируемые редюсеры туgit
});

export default rootReducer;
