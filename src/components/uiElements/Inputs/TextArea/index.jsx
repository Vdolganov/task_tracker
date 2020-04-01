import React from 'react';
import PropTypes from 'prop-types';

import Styled from './styled';

export const TextArea = ({ onChange, placeholder }) => (
  <Styled.TextArea>
    <Styled.TextAreaWorkArea onChange={(e) => onChange(e.target.value)} placeholder={placeholder} />
  </Styled.TextArea>
);

TextArea.defaultProps = {
  placeholder: 'Enter value',
};

TextArea.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
