import { combineReducers } from 'redux';
// тут импортируете все редюсеры
import { userReducer } from '../user';

const rootReducer = combineReducers({
  userData: userReducer
  // тут используете импортируемые редюсеры туgit
});

export default rootReducer;
