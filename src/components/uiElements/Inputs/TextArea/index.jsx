import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styled';

export const TextArea = ({ onChange, placeholder, defaultValue }) => (
  <Styled.TextArea>
    <Styled.TextAreaWorkArea
      defaultValue={defaultValue}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </Styled.TextArea>
);

TextArea.defaultProps = {
  placeholder: 'Enter value',
  defaultValue: '',
};

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
};
