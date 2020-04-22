import { actionTypes } from './actionTypes';

const toggleAddTaskModal = (visibility) => ({
  type: actionTypes.TOGGLE_ADD_TASK_MODAL,
  payload: visibility,
});

const closeAllModals = () => ({
  type: actionTypes.CLOSE_ALL_MODALS,
})

export { toggleAddTaskModal, closeAllModals };
