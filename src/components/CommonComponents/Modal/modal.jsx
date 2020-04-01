import React, { useEffect, useRef } from 'react';
import MaterialIcon from 'material-icons-react';
import PropTypes from 'prop-types';

import Hooks from 'utils/hooks';

import Styled from './styled';

export const Modal = ({ children, onClose }) => {
  const modalRef = useRef(null);

  Hooks.useOutsideClickHandler(modalRef, () => { onClose(); });
  const closeListener = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      onClose();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', closeListener);
    return () => document.removeEventListener('keydown', closeListener);
  });


  return (
    <Styled.Modal>
      <Styled.ModalWindow
        ref={modalRef}
      >
        <span
          style={{
            cursor: 'pointer', position: 'absolute', right: '5px', top: '5px',
          }}
          onClick={onClose}
        >
          <MaterialIcon icon="close" />
        </span>
        {children}
      </Styled.ModalWindow>
    </Styled.Modal>
  );
};


Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
