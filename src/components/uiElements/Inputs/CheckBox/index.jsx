import React, { useState } from 'react';
import Styled from './styled';

export const CheckBox = () => {
  const [localChecked, setLocalChecked] = useState(false);

  const handleChecked = () => {
    setLocalChecked(!localChecked);
  };

  return (
    <Styled.CheckboxContainer>
      <Styled.HiddenCheckbox checked={localChecked} />
      <Styled.StyledCheckbox checked={localChecked} onClick={handleChecked}>
        <Styled.Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Styled.Icon>
      </Styled.StyledCheckbox>
    </Styled.CheckboxContainer>
  );
};
