import React from 'react';
import Styled from '../styled';

export const NavigationLink = ({ children, link, title }) => (
  <Styled.StyledLink to={link} title={title}>
    {children}
  </Styled.StyledLink>
);
