import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styled';

export const TextField = ({
  onChange, placeholder, type, name,
}) => (
  <Styled.TextField>
    <Styled.TextFieldInput
      autoComplete="off"
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e) => onChange(e.target.value)}
    />
  </Styled.TextField>
);

TextField.defaultProps = {
  placeholder: 'Input value...',
  type: 'text',
  name: '',
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
};
