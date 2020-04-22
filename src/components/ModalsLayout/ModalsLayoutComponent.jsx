import React from 'react';
import PropTypes from 'prop-types';
import { modalKeys } from 'store/modalsControl/helpers';
import { AddNewTask } from 'components/index';

export const ModalsLayoutComponent = ({ activeModal, closeModal }) => {
  const modalComponents = {
    [modalKeys.add_task_modal_visible]: <AddNewTask modalVisible onClose={closeModal} />,
  };
  const getModal = () => (activeModal === null ? false : modalComponents[activeModal]);

  return getModal();
};

ModalsLayoutComponent.propTypes = {
  activeModal: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(null)]).isRequired,
  closeModal: PropTypes.func.isRequired,
};
