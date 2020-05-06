import React from 'react';
import { ReactTitle } from 'react-meta-tags';
import { DragAndDropColumn } from 'components/DragAndDropColumn';
import Styled from './styled';

export const Kanban = ({data, onLeave, onBring, onEnd, onMoveStart}) => (
  <Styled.KanbanContainer>
    <ReactTitle title="Board" />
    <Styled.KItemsContainer>
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
    </Styled.KItemsContainer>
  </Styled.KanbanContainer>
);
