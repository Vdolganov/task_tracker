import React from 'react';

const buttonStyles = {
  padding: '5px 20px',
  backgroundColor: '#d45d79',
  color: '#fff',
  border: 'none',
  boxShadow: '1px 0 2px lightgray',
  borderRadius: '6px',
  fontSize: '12px',
  marginRight: '10px',
};

const Button = ({ onPress, children }) => (
  <button onClick={onPress} style={buttonStyles}>
    {children}
  </button>
);

export default Button;
