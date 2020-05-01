import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker.min.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.min.css';
import './index.css';

export const Datepicker = ({ onChange, onBlur }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const handleChange = (val) => {
    setSelectedDate(val);
    onChange(val);
  };
  return (
    <DatePicker
      onBlur={onBlur}
      selected={selectedDate}
      onChange={handleChange}
      placeholderText="MM/DD/YYYY"
    />
  );
};

Datepicker.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
}
