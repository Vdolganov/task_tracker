import { combineReducers } from 'redux';
import { boardData } from './boardData';
import { modalsVisibility } from './modalsControl';
import { controls } from './controls';

const rootReducer = combineReducers({
  boardData,
  modalsVisibility,
  controls,
});

export default rootReducer;
