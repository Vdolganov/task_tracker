import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Styled from './styled';
import { SelectList } from './SelectList';
import { SelectedElement } from './SelectedElement';

export const Select = ({
  selectArray, onChange, placeholder, onBlur,
}) => {
  const [listOpened, setListOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectRef = useRef(null);

  const onSelect = (index) => {
    setListOpened(false);
    if (index !== null) {
      setSelectedIndex(index);
      onChange(selectArray[index].id);
    }
  };

  const triggerOpened = () => {
    setListOpened(!listOpened);
  };

  const controlOpenOnEnterListener = (action) => {
    switch (action) {
      case 'set':
        return selectRef.current.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            triggerOpened();
          }
        });
      case 'remove':
        return selectRef.current.removeEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            triggerOpened();
          }
        });
      default:
        return selectRef.current.removeEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            triggerOpened();
          }
        });
    }
  };

  useEffect(() => selectRef.current.removeEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      triggerOpened();
    }
  }));

  return (
    <Styled.Select
      ref={selectRef}
      tabIndex="0"
      onFocus={() => {
        controlOpenOnEnterListener('set');
      }}
      onBlur={(e) => {
        onBlur(e);
        controlOpenOnEnterListener('remove');
      }}
    >
      <SelectedElement onClick={triggerOpened} opened={listOpened}>
        {selectedIndex !== null ? (
          <span>
            {' '}
            {selectArray[selectedIndex].name}
            {' '}
          </span>
        ) : (
          <Styled.SelectPlaceholder>
            { placeholder }
          </Styled.SelectPlaceholder>
        )}
      </SelectedElement>
      {
                listOpened
                && (
                <SelectList
                  selectedElement={selectedIndex}
                  onSelect={onSelect}
                  selectItems={selectArray}
                  parentRef={selectRef}
                />
                )
            }
    </Styled.Select>
  );
};

Select.defaultProps = {
  placeholder: 'Select value',
  name: '',
  onBlur: () => {},
};

Select.propTypes = {
  selectArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  onBlur: PropTypes.func,
};
