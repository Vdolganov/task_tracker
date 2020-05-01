import React from 'react';

import { UniversalForm } from 'components';
import { inputTypes } from 'utils/variables';

const schema = {
  fields: [
    {
      type: inputTypes.text,
      name: 'Username',
      validation: 'string().required(that field is required).min(3)',
    },
    {
      type: inputTypes.range,
      name: 'New range',
      validation: 'number().required()',
      range: {
        min: 0,
        max: 99,
      },
    },
    {
      type: inputTypes.textarea,
      name: 'Password',
      validation: 'string().required(that field is required)',
    },
    {
      type: inputTypes.datepicker,
      name: 'Datepicker',
      validation: 'date.required()',
    },
    {
      type: inputTypes.select,
      name: 'Task status',
      options: [
        { name: 'dick', id: 0 },
        { name: 'vegana', id: 1 },
      ],
      validation: 'number().required(that field is required)',
    },
    {
      type: inputTypes.range,
      name: 'Fuck',
      range: {
        min: 0,
        max: 99,
      },
    },
    {
      type: inputTypes.checkbox,
      name: 'Suck',
      range: {
        min: 0,
        max: 100,
      },
    },
  ],
  buttons: [
    { text: 'save', type: 'accept' },
    { text: 'cancel', type: 'cancel' },
  ],
};

const ChartPage = () => (
  <div>
    <UniversalForm
      formSchema={schema}
      onRealSubmit={(val) => {
        console.log(val);
      }}
    />
  </div>
);

export default ChartPage;
