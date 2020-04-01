import React, { useState } from 'react';
import { AddNewTaskModal } from 'components/AddNewTask/AddNewTaskModal';
import { addTask } from 'store/boardData/actionCreaters';
import { connect } from 'react-redux';
import { variables } from '../../utils/variables';

const { primaryColor } = variables;

const buttonStyle = {
  backgroundColor: primaryColor,
  fontSize: '14px',
  border: 'none',
  borderRadius: '4px',
  boxShadow: '1px 1px 2px lightgray',
  cursor: 'pointer',
  height: '20px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  outline: 'none',
  margin: '4px',
};

const AddNewTask = ({ addNewTask }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{
      margin: '10px 0',
    }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}
      >
        <button style={buttonStyle} onClick={() => { setShowModal(true); }}>
          <span>
            + add task
          </span>
        </button>
      </div>
      {
                showModal && (
                <AddNewTaskModal
                  onClose={() => { setShowModal(false); }}
                  addTask={addNewTask}
                />
                )
            }
    </div>
  );
};

const mapDispatchToProps = {
  addNewTask: addTask,
};

const mapStateToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AddNewTask);
