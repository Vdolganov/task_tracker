import { actionTypes } from './actionTypes';

const switchToggle = (sm) => ({
  type: actionTypes.TOGGLE_SIMPLE_MODE,
  payload: sm,
});

export { switchToggle };
