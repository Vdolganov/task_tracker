import React from 'react';
import PropTypes from 'prop-types';

import { modal } from 'components/HOC';

import { UniversalForm } from 'components/UniversalForm';
import { schema } from './schema';


export const NewTaskModal = ({ onClose, addTask }) => {
  const saveTask = (values) => {
    addTask(
      {
        name: values.name,
        id: Math.random().toString(),
        taskDescription: values.description,
        date: new Date(),
        status: values.status,
      },
    );
    onClose();
  };

  return (
    <>
      <UniversalForm formSchema={schema} onRealSubmit={saveTask} onCancel={onClose} />
    </>
  );
};

NewTaskModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export const AddNewTaskModal = modal(NewTaskModal);
