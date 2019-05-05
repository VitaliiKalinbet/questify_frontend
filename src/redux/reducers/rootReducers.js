import { combineReducers } from 'redux';
// тут импортируете все редюсеры
import { userReducer } from '../user';
import auth from '../auth/authReducer';
import { createQuestReducer } from '../createQuest/createQuestReducer';
import { editQuestReducer } from '../editQuest/editQuestReducer';

const rootReducer = combineReducers({
  userData: userReducer,
  isAuthenticated: auth,
  addMode: createQuestReducer,
  editMode: editQuestReducer
  // тут используете импортируемые редюсеры туgit
});

export default rootReducer;
