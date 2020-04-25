import React from 'react';

import { Chart } from 'components/Chart';
import { UniversalForm } from 'components';
import { inputTypes } from 'utils/variables';

const schema = {
  fields: [
    {
      type: inputTypes.text,
      name: 'Username',
      validation: [
        { validationType: 'required', errorMessage: 'Required' },
        {
          validationType: 'minLength',
          value: 3,
          errorMessage: 'Min length 3',
        },
      ],
    },
    {
      type: inputTypes.textarea,
      name: 'Password',
      validation: [
        { validationType: 'required', errorMessage: 'Required' },
        {
          validationType: 'minLength',
          value: 3,
          errorMessage: 'Min length 3',
        },
      ],
    },
    {
      type: inputTypes.select,
      name: 'Task status',
      options: [
        { name: 'dick', id: 0 },
        { name: 'vegana', id: 1 },
      ],
      validation: [
        { validationType: 'required', errorMessage: 'Required' },
      ],
    },
    {
      type: inputTypes.range,
      name: 'Fuck',
      range: {
        min: 0,
        max: 100,
      },
      validation: [
        { validationType: 'required', errorMessage: 'Required' },
      ],
    },
    {
      type: inputTypes.checkbox,
      name: 'Suck',
      range: {
        min: 0,
        max: 100,
      },
      validation: [
        { validationType: 'required', errorMessage: 'Required' },
      ],
    },
  ],
  buttons: [
    { text: 'save', type: 'accept' },
    { text: 'cancel', type: 'cancel' },
  ],
};

const ChartPage = () => (
  <div>
    <UniversalForm formSchema={schema} />
  </div>
);

export default ChartPage;
