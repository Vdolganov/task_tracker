const statuses = [{ id: 0, name: 'Backlog' }, { id: 1, name: 'Sprint' }, { id: 2, name: 'To Do' }, { id: 3, name: 'Doing' }, { id: 4, name: 'Verify' }, { id: 5, name: 'Done' }];

const variables = {
  textColor: '#545454',
  primaryColor: '#d8dbf5',
  lightGrayColor: '#919191',
  acceptColor: '#216c3d',
  lightColor: '#ede4df',
  declineColor: '#7d1f20',
  fontSizeBiggest: '32px',
  fontSizeBig: '24px',
  fontSizeRegular: '18px',
  fontSizeSmall: '14px',
  fontSizeSmaller: '10px',
  primaryDark: '#000613',
  statuses,
};

const inputTypes = {
  email: 'email',
  text: 'text',
  password: 'password',
  select: 'select',
  checkbox: 'checkbox',
  textarea: 'textarea',
  radio: 'radio',
  range: 'range',
  datepicker: 'datepicker',
  switchControl: 'switchControl',
  textEditor: 'textEditor',
};

const statusesColors = {
  [statuses[0].id]: '#FF9AA2',
  [statuses[1].id]: '#FFDAC1',
  [statuses[2].id]: '#B5EAD7',
  [statuses[3].id]: '#C7CEEA',
  [statuses[4].id]: '#E2F0CB',
  [statuses[5].id]: '#00FFB2',
};

export {
  variables, inputTypes, statuses, statusesColors,
};
