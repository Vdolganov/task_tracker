import React from 'react';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import history from 'history';
import Styled from './styled';

const { SimpleTaskItem, TaskTitle, TaskDescription } = Styled;

export const SimpleTask = ({
  name, taskDescription, statusName,
  statusId, id,
}) => {
  const sliceText = (text, maxLength = 90) => (text.length > maxLength ? `${text.slice(0, maxLength - 1)}...` : text);
  return (
    <SimpleTaskItem>
      <TaskTitle>
        <Link to={`/task/${id}`}>
          {' '}
          {name}
          {' '}
        </Link>
      </TaskTitle>
      <TaskDescription>
        {sliceText(parse(taskDescription), 200)}
      </TaskDescription>
    </SimpleTaskItem>
  );
};
