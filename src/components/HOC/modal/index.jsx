import React, { useRef } from 'react';

import Hooks from 'utils/hooks';

import MaterialIcon from 'material-icons-react';
import Styled from './styled';

export const modal = (Component) => (props) => {
  const modalRef = useRef(null);

  Hooks.useOutsideClickHandler(modalRef, () => { props.onClose(); });

  return (
    <Styled.Modal>
      <Styled.ModalWindow ref={modalRef}>
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
        <span
          style={{
            cursor: 'pointer', position: 'absolute', right: '5px', top: '5px',
          }}
          onClick={props.onClose}
        >
          <MaterialIcon icon="close" />
        </span>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...props} />
      </Styled.ModalWindow>
    </Styled.Modal>
  );
};
