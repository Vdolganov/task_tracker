import React, { useState } from 'react';
import { Range as LocalRange } from 'react-range';
import PropTypes from 'prop-types';
import Styled from './styled';

const width = 400;

export const Range = ({
  min, max, onChange, onBlur,
}) => {
  const [rangeValue, setRangeValue] = useState(min);

  const onChangeValue = (val) => {
    onChange(val[0]);
    setRangeValue(val[0]);
  };

  return (
    <Styled.RangeContainer pWidth={width}>
      <Styled.RangeNumbersContainer>
        <Styled.RangeNumber>
          {min}
        </Styled.RangeNumber>
        <Styled.RangeNumber>
          {max}
        </Styled.RangeNumber>
      </Styled.RangeNumbersContainer>
      <LocalRange
        step={1}
        min={min}
        max={max}
        width={`${width}px`}
        values={[rangeValue]}
        onChange={onChangeValue}
        renderTrack={({ props, children }) => (
          <Styled.RangeActiveElement {...props}>
            {children}
          </Styled.RangeActiveElement>
        )}
        renderThumb={({ props }) => (
          <Styled.RangeValue
            {...props}
            onBlur={onBlur}
          >
            {' '}
            <output style={{ marginTop: '30px' }} id="output">
              {rangeValue}
            </output>
            {' '}

          </Styled.RangeValue>
        )}
      />
    </Styled.RangeContainer>
  );
};

Range.propTypes = {
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};
