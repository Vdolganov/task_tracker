import React from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';
import Styled from './styled';

export const SelectedElement = ({ onClick, children, opened }) => (
  <Styled.SelectedElementHeader onClick={onClick}>
    {children}
    <span style={{
      transform: `rotate(${opened ? '180deg' : '0'})`,
      transition: '0.2s',
      lineHeight: '0',
      userSelect: 'none',
    }}
    >
      <MaterialIcon icon="keyboard_arrow_down" />
    </span>
  </Styled.SelectedElementHeader>
);

SelectedElement.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  opened: PropTypes.bool.isRequired,
};
