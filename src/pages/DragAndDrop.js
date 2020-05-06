import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TopTaskControls } from 'components/uiElements/TopTaskControls';
import { Kanban, SimpleMode } from 'components';
import { moveTask } from '../store/boardData/actionCreaters';

const DragAndDrop = ({ data, moveTaskLocal, simpleMode }) => {
  const [draggableItemId, setDraggableItemId] = useState(null);
  const [mainParentId, setParentId] = useState(null);

  console.log(data, 'data')

  const onBring = (id) => {
    setParentId(id);
  };

  const onEnd = () => {
    moveTaskLocal(draggableItemId, mainParentId);
  };

  const onMoveStart = (id) => {
    setDraggableItemId(id);
  };

  const onLeave = () => {
    setParentId(null);
  };

  return (
    <div>
      <TopTaskControls />
      {
        simpleMode ? <SimpleMode data={data} /> : (
          <Kanban
            data={data}
            onBring={onBring}
            onEnd={onEnd}
            onLeave={onLeave}
            onMoveStart={onMoveStart}
          />
        )

      }
    </div>
  );
};

DragAndDrop.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  moveTaskLocal: PropTypes.func.isRequired,
};

const mapStateToProps = (state /* , ownProps */) => ({
  data: state.boardData.tasks,
  simpleMode: state.controls.simple_mode,
});

const mapDispatchToProps = {
  moveTaskLocal: moveTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DragAndDrop);
