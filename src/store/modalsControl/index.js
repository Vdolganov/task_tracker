import { actionTypes } from './actionTypes';
import { modalKeys } from './helpers';

const ACTION_HANDLERS = {
  [actionTypes.TOGGLE_ADD_TASK_MODAL]:
        (state, { payload }) => ({
          ...Object.keys(state).reduce((accumulator, modalKey) => {
            accumulator[modalKey] = false;
            return accumulator;
          }, {}),
          add_task_modal_visible: payload,
        }),
  [actionTypes.CLOSE_ALL_MODALS]:
        (state) => ({
          ...Object.keys(state).reduce((accumulator, modalKey) => {
            accumulator[modalKey] = false;
            return accumulator;
          }, {}),
        }),
};

const initialState = {
  [modalKeys.add_task_modal_visible]: false,
};

export const modalsVisibility = (state = initialState, action) => (ACTION_HANDLERS[action.type]
  ? ACTION_HANDLERS[action.type](state, action) : state);
