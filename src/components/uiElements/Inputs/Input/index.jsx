import React from 'react';

export const Input = ({
  onChange, placeholder, type, name, max, min,
}) => (
  <input type={type} name={name} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} max={max} min={min} />
);

Input.defaultProps = {
  max: null,
  min: null,
};
