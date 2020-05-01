import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styled';

export const TextField = ({
  onChange, placeholder, type, name, onBlur,
}) => (
  <Styled.TextField>
    <Styled.TextFieldInput
      autoComplete="off"
      type={type}
      onBlur={onBlur}
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
  onBlur: () => {},
};

TextField.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
};
