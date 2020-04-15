import { useEffect } from 'react';

export const useOutsideClickHandler = (ref, outsideCallback) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      outsideCallback();
    }
  }

  const escClickListener = (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      e.stopPropagation();
      outsideCallback();
    }
  };


  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', escClickListener);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', escClickListener);
    };
  });
};
