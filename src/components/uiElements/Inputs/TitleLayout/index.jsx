import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styled';

export const TitleLayout = ({
  title, children, error, errorText,
}) => (
  <Styled.TitleLayout>
    <Styled.TitleLayoutTitle>
      {title}
    </Styled.TitleLayoutTitle>
    {children}
    {
          error
          && (
          <Styled.InputError>
              {errorText}
          </Styled.InputError>
          )
      }
  </Styled.TitleLayout>
);


TitleLayout.defaultProps = {
  error: false,
  errorText: 'Input value',
};

TitleLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  error: PropTypes.bool,
  errorText: PropTypes.string,
};
