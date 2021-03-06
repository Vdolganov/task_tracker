import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import { deleteTask } from 'store/boardData/actionCreaters';
import { connect } from 'react-redux';
import parse from 'html-react-parser';
import history from '../../history';
import { variables, statusesColors } from '../../utils/variables';

const { textColor, primaryColor } = variables;
const CONFIRM_MESSAGE = 'Are you sure?';

const DragAndDropItem = ({
  name, id, dragStart, dragEnd, date, description, status, removeLocalTask,
}) => {
  const [visible, setVisible] = useState(false);
  const [pressed, setPressed] = useState(false);

  let timeout = null;

  useEffect(() => {
    timeout = setTimeout(() => {
      setVisible(true);
    },
    300);
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  const sliceText = (text, maxLength = 90) => (text.length > maxLength ? `${text.slice(0, maxLength - 1)}...` : text);

  const onDragStart = () => {
    setTimeout(() => {
      setVisible(false);
      dragStart(id);
    }, 1);
  };

  const mouseDown = () => {
    setPressed(true);
  };
  const mouseUp = () => {
    setPressed(false);
  };
  const onDragEnd = () => {
    dragEnd(id);
    mouseUp();
    setVisible(true);
  };
  const addZeroToDate = (value) => (value.toString().length === 1 ? `0${value}` : value);
  const dateFormat = (currentDate) => `${addZeroToDate(currentDate.getDate())}.${addZeroToDate(currentDate.getMonth() + 1)}.${addZeroToDate(currentDate.getFullYear())}`;

  const doubleClick = () => {
    history.push(`/task/${id}`);
  };

  const onDeleteTask = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(CONFIRM_MESSAGE)) {
      removeLocalTask({ status, id });
    }
  };

  return (
    <div
      style={{
        boxShadow: pressed ? '2px 2px 5px lightgray' : '0px 0px 4px darkgray',
        transition: 'all 0.2s ease',
        color: 'black',
        borderRadius: '4px',
        margin: '4px',
        height: '200px',
        userSelect: 'none',
        opacity: visible ? '1' : '0',
        transform: visible ? 'scale(1)' : 'scale(0.8)',
        boxSizing: 'border-box',
        cursor: 'pointer',
      }}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      draggable="true"
      onDragStart={onDragStart}
      onDoubleClick={doubleClick}
      onDragEnd={onDragEnd}
    >
      <div style={{ background: primaryColor, padding: '10px', borderRadius: '4px 4px 0 0' }}>
        <span
          style={{
            cursor: 'pointer', position: 'absolute', right: '5px', top: '5px',
          }}
        >
          <MaterialIcon icon="close" onClick={() => onDeleteTask()} />
        </span>
        <h4 style={{ margin: '0', color: textColor }}>{name}</h4>
      </div>
      <div style={{ padding: '5px 10px' }}>
        <p
          style={{
            margin: '0', color: textColor, fontSize: '13px', height: '120px',
          }}
          title={parse(description)}
        >
          {' '}
          {sliceText(parse(description), 200)}
          {' '}
        </p>
        <span style={{ fontSize: '9px', color: 'rgba(23,41,56,0.9)' }}>{dateFormat(date)}</span>
      </div>
    </div>
  );
};

DragAndDropItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  dragStart: PropTypes.func.isRequired,
  dragEnd: PropTypes.func.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  description: PropTypes.string.isRequired,
  removeLocalTask: PropTypes.func.isRequired,
  status: PropTypes.string.isRequired,
};

const mapDispatchToProps = {
  removeLocalTask: deleteTask,
};

const mapStateToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DragAndDropItem);
