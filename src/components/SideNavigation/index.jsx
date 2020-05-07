import React from 'react';
import MaterialIcon from 'material-icons-react';
import { connect } from 'react-redux';
import { toggleAddTaskModal } from 'store/modalsControl/actionCreaters';
import { NavigationLink } from './NavigationLink';
import Styled from './styled';

const MIcon = ({ icn, color = 'white', size = 'middle' }) => (
  <>
    <MaterialIcon
      icon={icn}
      color={color}
      size={size}
      alt="test"
    />
  </>
);

export const SideNavigationComponent = ({ setModalTaskVisibility }) => (
  <Styled.NavigationContainer style={{ minHeight: window.innerHeight, zIndex: 100 }}>
    <Styled.StickyContainer>
      <Styled.FuncButton title="Add new task" onClick={() => { setModalTaskVisibility(true); }}>
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

const mapDispatchToProps = {
  setModalTaskVisibility: toggleAddTaskModal,
};

const mapStateToProps = () => ({
});


export const SideNavigation = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideNavigationComponent);
