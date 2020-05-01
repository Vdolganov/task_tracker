import React from 'react';

export const Input = ({
  onChange, placeholder, type, name, max, min, onBlur
}) => (
  <input type={type} name={name} onBlur={onBlur} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} max={max} min={min} />
);

Input.defaultProps = {
  max: null,
  min: null,
};
