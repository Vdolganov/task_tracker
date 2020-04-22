import { combineReducers } from 'redux';
import { boardData } from './boardData';
import { modalsVisibility } from './modalsControl';

const rootReducer = combineReducers({
  boardData,
  modalsVisibility,
});

export default rootReducer;
