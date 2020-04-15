import { actionTypes } from './actionTypes';
import {
  moveTask, dataGenerator, addTask, deleteTask,
} from './helpers';

const ACTION_HANDLERS = {
  [actionTypes.MOVE_TASK]:
      (state, { payload }) => ({
        ...state,
        tasks:
              moveTask(state.tasks, payload.childId, payload.parentId),
      }),
  [actionTypes.ADD_TASK]:
      (state, { payload }) => ({
        ...state,
        tasks: addTask(state.tasks, payload),
      }),
  [actionTypes.DELETE_TASK]:
      (state, { payload }) => ({
        ...state,
        tasks: deleteTask(state.tasks, payload),
      }),
};

const initialState = {
  tasks: dataGenerator(),
};

export const boardData = (state = initialState, action) => (ACTION_HANDLERS[action.type] ? ACTION_HANDLERS[action.type](state, action) : state);
