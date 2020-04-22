import React from 'react';
import MaterialIcon from 'material-icons-react';
import history from '../../../history';
import Styled from './styled';

const GoBack = () => (
  <Styled.GoBack>
    <Styled.Button
      type="button"
      onClick={() => { history.goBack(); }}
    >
      <MaterialIcon icon="arrow_back" color="black" size="middle" />
    </Styled.Button>
  </Styled.GoBack>
);

export default GoBack;
