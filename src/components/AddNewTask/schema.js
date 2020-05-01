import { inputTypes, statuses } from 'utils/variables';


export const schema = {
  fields: [
    {
      type: inputTypes.text,
      name: 'Name',
      validation: 'string().required().min(3)',
    },
    {
      type: inputTypes.select,
      name: 'Status',
      options: statuses,
      validation: 'number().required()',
    },
    {
      type: inputTypes.textarea,
      name: 'Description',
      validation: 'string().required().min(20)',
    },
  ],
  buttons: [
    { text: 'save', type: 'accept' },
    { text: 'cancel', type: 'cancel' },
  ],
};
