import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Styled from './styled';
import { SelectList } from './SelectList';
import { SelectedElement } from './SelectedElement';

export const Select = ({
  selectArray, onChange, placeholder, name,
}) => {
  const [listOpened, setListOpened] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectRef = useRef(null);

  const onSelect = (index) => {
    setListOpened(false);
    if (index !== null) {
      setSelectedIndex(index);
      const event = {
        target: {
          value: selectArray[index].id,
          type: 'change',
          name,
        },
      };
      onChange(event);
    }
  };
  return (
    <Styled.Select
      ref={selectRef}
      tabIndex="0"
      onFocus={() => {
        if (!listOpened) {
          setListOpened(true);
        }
      }}
      onBlur={() => setListOpened(false)}
    >
      <SelectedElement onClick={() => { setListOpened(!listOpened); }} opened={listOpened}>
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
};

Select.propTypes = {
  selectArray: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string,
};
