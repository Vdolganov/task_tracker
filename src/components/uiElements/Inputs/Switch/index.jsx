import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styled from './styled';

export const Switch = ({ val, onChange }) => {
  const [switchValue, setSwitchValue] = useState(val);

  const handleSwitch = () => {
    const newValue = !switchValue;
    setSwitchValue(newValue);
    onChange(newValue);
  };
  return (
    <Styled.CheckBoxWrapper>
      <Styled.CheckBox id="checkbox" type="checkbox" checked={switchValue} />
      <Styled.CheckBoxLabel htmlFor="checkbox" onClick={handleSwitch} />
    </Styled.CheckBoxWrapper>
  );
};

Switch.propTypes = {
  onChange: PropTypes.func.isRequired,
};
