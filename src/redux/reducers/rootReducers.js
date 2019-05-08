import { combineReducers } from 'redux';
// тут импортируете все редюсеры
import { userReducer } from '../user';
import auth from '../auth/authReducer';
import { createQuestReducer } from '../createQuest/createQuestReducer';
import challengeReducer from '../challenge/challengeReducer';

const rootReducer = combineReducers({
  userData: userReducer,
  isAuthenticated: auth,
  addMode: createQuestReducer,
  isNewChallenge: challengeReducer
  // тут используете импортируемые редюсеры туgit
});

export default rootReducer;
