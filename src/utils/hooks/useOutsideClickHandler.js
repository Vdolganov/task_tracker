import { useEffect } from 'react';

export const useOutsideClickHandler = (ref, outsideCallback) => {
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      outsideCallback();
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
};
