import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ReactTitle } from 'react-meta-tags';
import { DragAndDropColumn } from 'components/DragAndDropColumn';
import { moveTask } from '../store/boardData/actionCreaters';

const DragAndDrop = ({ data, moveTaskLocal }) => {
  const [draggableItemId, setDraggableItemId] = useState(null);
  const [mainParentId, setParentId] = useState(null);

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
    <div style={{
      width: 'auto',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'flex-start',
    }}
    >
      <ReactTitle title="Board" />
      <div style={{
        display: 'inline-flex', flexDirection: 'row', justifyContent: 'flex-start', width: 'auto',
      }}
      >
        {
                data.map(
                  (item) => (
                    <DragAndDropColumn
                      items={item.children}
                      columnName={item.name}
                      key={item.id}
                      currentId={item.id}
                      onLeave={onLeave}
                      onBring={onBring}
                      onEnd={onEnd}
                      onMoveStart={onMoveStart}
                    />
                  ),
                )
            }
      </div>
    </div>
  );
};

DragAndDrop.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  moveTaskLocal: PropTypes.func.isRequired,
};

const mapStateToProps = (state /* , ownProps */) => ({
  data: state.boardData.tasks,
});

const mapDispatchToProps = {
  moveTaskLocal: moveTask,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DragAndDrop);
