import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Hooks from 'utils/hooks';

import Styled from './styled';

export const SelectList = ({
  selectItems, onSelect, selectedElement, parentRef,
}) => {
  const defaultSelectedIndex = selectedElement !== null ? selectedElement : 0;
  const [preselectedIndex, setSelectedIndex] = useState(defaultSelectedIndex);

  Hooks.useOutsideClickHandler(parentRef, () => { onSelect(selectedElement); });

  const selectListener = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onSelect(preselectedIndex);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const newIndex = preselectedIndex + 1 < selectItems.length ? preselectedIndex + 1 : 0;
      setSelectedIndex(newIndex);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      const newIndex = preselectedIndex > 0 ? preselectedIndex - 1 : selectItems.length - 1;
      setSelectedIndex(newIndex);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', selectListener);
    return () => document.removeEventListener('keydown', selectListener);
  });

  return (
    <Styled.SelectedListContainer>
      <Styled.SelectList>
        {
                   selectItems.map((selectItem, index) => (
                     <Styled.SelectListItem
                       key={`${Math.random()}-${selectItem.name}`}
                       onClick={() => { onSelect(index); }}
                       preselected={preselectedIndex === index}
                     >
                       {selectItem.name}
                     </Styled.SelectListItem>
                   ))
               }
      </Styled.SelectList>
    </Styled.SelectedListContainer>
  );
};

SelectList.defaultProps = {
  selectItems: {
    required: true,
  },
  onSelect: {
    required: true,
  },
};

SelectList.defaultProps = {
  selectedElement: 0,
};

SelectList.propTypes = {
  selectItems: PropTypes.arrayOf(PropTypes.object),
  onSelect: PropTypes.func,
  selectedElement: PropTypes.number,
  parentRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLDivElement) }).isRequired,
};
