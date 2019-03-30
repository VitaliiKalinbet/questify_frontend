import { combineReducers } from 'redux';
// тут импортируете все редюсеры
import { buttonReducer } from '../createQuestButtonReducerTest';

const rootReducer = combineReducers({
  createNewQuest: buttonReducer
  // тут используете импортируемые редюсеры
});

export default rootReducer;
