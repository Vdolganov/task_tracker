import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styled';

export const TextField = ({ onChange, placeholder }) => (
  <Styled.TextField>
    <Styled.TextFieldInput placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
  </Styled.TextField>
);

TextField.defaultProps = {
  placeholder: 'Input value...',
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};
