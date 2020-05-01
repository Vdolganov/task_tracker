import React, { useState } from 'react';
import DragAndDropItem from '../DragAndDropItem';
import { variables } from '../../utils/variables';

const { textColor } = variables;

export const DragAndDropColumn = ({
  items, currentId, onBring, onMoveStart, onEnd, columnName,
}) => {
  const [dragOver, setDragOver] = useState(false);

  const dragStart = (id) => {
    onMoveStart(id);
  };

  const dragEnd = () => {
    onEnd();
  };

  const onBringLocal = () => {
    setDragOver(true);
    onBring(currentId);
  };

  const dragLeave = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (dragOver) {
      setTimeout(() => {
        setDragOver(false);
      }, 100);
    }
  };

  const sortByDate = (a, b) => {
    if (a.date > b.date) {
      return -1;
    } if (a.date < b.date) {
      return 1;
    }
    return 0;
  };

  return (
    <div
      style={{
        width: '210px',
        transition: 'all 0.2s ease',
        background: dragOver ? 'rgba(82, 234, 255, 0.3)' : 'transparent',
        minHeight: `${window.innerHeight}px`,
      }}
      id="parent-id"
      onDragOver={onBringLocal}
      onDragLeave={dragLeave}
    >
      <h3 style={{ textAlign: 'center', color: textColor }}>{columnName}</h3>
      {
        items.sort((a, b) => sortByDate(a, b)).map((el) => (
          <DragAndDropItem
            name={el.name}
            id={el.id}
            description={el.taskDescription}
            date={el.date}
            key={el.id}
            status={currentId}
            dragStart={dragStart}
            dragEnd={dragEnd}
          />
        ))
    }
    </div>
  );
};
