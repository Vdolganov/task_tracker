import React from 'react';
import PropTypes from 'prop-types';
import { AddNewTaskModal } from 'components/AddNewTask/AddNewTaskModal';
import { addTask } from 'store/boardData/actionCreaters';
import { connect } from 'react-redux';

const AddNewTask = ({ addNewTask, onClose }) => (
  <>
    <AddNewTaskModal
      onClose={() => { onClose(false); }}
      addTask={addNewTask}
    />
  </>
);

AddNewTask.propTypes = {
  addNewTask: PropTypes.func.isRequired,
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
