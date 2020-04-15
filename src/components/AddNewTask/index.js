import React from 'react';
import PropTypes from 'prop-types';
import { AddNewTaskModal } from 'components/AddNewTask/AddNewTaskModal';
import { addTask } from 'store/boardData/actionCreaters';
import { connect } from 'react-redux';

const AddNewTask = ({ addNewTask, modalVisible = false, onClose }) => (
  <div style={{
    margin: '10px 0',
    zIndex: 1000,
  }}
  >
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-end',
    }}
    />
    {
        modalVisible && (
        <AddNewTaskModal
          onClose={() => { onClose(false); }}
          addTask={addNewTask}
        />
        )
            }
  </div>
);

AddNewTask.propTypes = {
  addNewTask: PropTypes.func.isRequired,
  modalVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
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
