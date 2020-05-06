import React from 'react';
import { connect } from 'react-redux';
import { switchToggle } from 'store/controls/actionCreaters';
import { Switch } from 'components/uiElements/Inputs/Switch';
import Styled from './styled';

const TopTaskControlsComponent = ({ toggleSwitch, simpleMode}) => (
  <Styled.ControlsContainer>
    <Styled.Label>
      <span style={{ marginRight: '10px' }}>
        Simple mode
      </span>
      <Switch val={simpleMode} onChange={toggleSwitch} />
    </Styled.Label>
  </Styled.ControlsContainer>
);

const mapDispatchToProps = {
  toggleSwitch: switchToggle,
};

const mapStateToProps = (state) => ({
  simpleMode: state.controls.simple_mode,
});

export const TopTaskControls = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopTaskControlsComponent);
