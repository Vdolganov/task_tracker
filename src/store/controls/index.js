import { actionTypes } from './actionTypes';

const ACTION_HANDLERS = {
  [actionTypes.TOGGLE_SIMPLE_MODE]:
        (state, { payload }) => ({
          ...state,
          simple_mode: payload,
        }),
};

const initialState = {
  simple_mode: false,
};

export const controls = (state = initialState, action) => (ACTION_HANDLERS[action.type]
  ? ACTION_HANDLERS[action.type](state, action) : state);
