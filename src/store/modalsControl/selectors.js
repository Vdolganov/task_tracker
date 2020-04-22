export const activeModalName = (modals) => {
  let currentModal = null;

  Object.keys(modals).forEach((modalKey) => {
    if (modals[modalKey]) {
      currentModal = modalKey;
    }
  });

  return currentModal;
};
