import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextField } from 'components/uiElements/Inputs/TextField';
import { Select } from 'components/uiElements/Inputs/Select';
import { TitleLayout } from 'components/uiElements/Inputs/TitleLayout';
import { modal } from 'components/HOC';
import { TextArea } from 'components/uiElements/Inputs/TextArea';
import { variables } from 'utils/variables';

import Styled from './styled';

export const NewTaskModal = ({ onClose, addTask }) => {
  const { statuses } = variables;

  const [title, setTitle] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState();

  const isItEnabledSaveButton = () => title && status !== undefined && description;

  const task = () => ({
    name: title,
    id: Math.random().toString(),
    taskDescription: description,
    date: new Date(),
    status,
  });

  const saveTask = () => {
    addTask(task());
    onClose();
  };

  return (
    <>
      <Styled.AddNewTaskTitle>
        New task
      </Styled.AddNewTaskTitle>
      <TitleLayout title="Title:">
        <TextField onChange={setTitle} />
      </TitleLayout>
      <TitleLayout title="Task status:">
        <Select
          selectArray={statuses}
          onChange={setStatus}
        />
      </TitleLayout>
      <TitleLayout title="Description:">
        <TextArea onChange={setDescription} placeholder="Enter description" />
      </TitleLayout>
      <Styled.ButtonsContainer>
        <Styled.AcceptButton disabled={!isItEnabledSaveButton()} onClick={() => saveTask()}>
          Save
        </Styled.AcceptButton>
        <Styled.CancelButton onClick={() => { onClose(); }}>
          Cancel
        </Styled.CancelButton>
      </Styled.ButtonsContainer>
    </>
  );
};

NewTaskModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};

export const AddNewTaskModal = modal(NewTaskModal);
