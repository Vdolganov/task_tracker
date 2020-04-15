import React, { useState } from 'react';
import MaterialIcon from 'material-icons-react';
import { NavigationLink } from './NavigationLink';
import { AddNewTask } from '..';
import Styled from './styled';

const MIcon = ({ icn, color = 'white', size = 'middle' }) => (
  <>
    <MaterialIcon
      icon={icn}
      color={color}
      size={size}
    />
  </>
);

export const SideNavigation = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Styled.NavigationContainer style={{ minHeight: window.innerHeight, zIndex: 100 }}>
      <AddNewTask modalVisible={modalVisible} onClose={setModalVisible} />
      <Styled.StickyContainer>
        <Styled.FuncButton title="Add new task" onClick={() => { setModalVisible(true); }}>
          <>
            <MIcon icn="add" color="black" size={20} />
          </>
        </Styled.FuncButton>
        <NavigationLink link="/" title="Board">
          <MIcon icn="developer_board" />
        </NavigationLink>
        <NavigationLink link="/chart" title="Chart">
          <MIcon icn="multiline_chart" />
        </NavigationLink>
      </Styled.StickyContainer>
    </Styled.NavigationContainer>
  );
};
