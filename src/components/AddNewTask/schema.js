import { inputTypes, statuses } from 'utils/variables';


export const schema = {
  fields: [
    {
      type: inputTypes.text,
      name: 'Name',
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
      name: 'Status',
      options: statuses,
      validation: [
        { validationType: 'required', errorMessage: 'Required' },
      ],
    },
    {
      type: inputTypes.textarea,
      name: 'Description',
      validation: [
        { validationType: 'required', errorMessage: 'Required' },
        {
          validationType: 'minLength',
          value: 3,
          errorMessage: 'Min length 3',
        },
      ],
    },
  ],
  buttons: [
    { text: 'save', type: 'accept' },
    { text: 'cancel', type: 'cancel' },
  ],
};
