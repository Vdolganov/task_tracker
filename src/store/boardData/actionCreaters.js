import { actionTypes } from './actionTypes';

const moveTask = (childId, parentId) => ({
  type: actionTypes.MOVE_TASK,
  payload: { childId, parentId },
});
const addTask = (newTask) => ({ type: actionTypes.ADD_TASK, payload: newTask });

const deleteTask = (task) => ({ type: actionTypes.DELETE_TASK, payload: task });

export { moveTask, addTask, deleteTask };
