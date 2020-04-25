import React from 'react';

export const inputDataWrapper = (Component) => (props) => {
  const createEvent = (newValue) => {
    const event = newValue.name ? newValue : {
      target: {
        value: newValue,
        type: 'change',
        name: props.name,
      },
    };
    props.onChange(event);
  };

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...props} onChange={createEvent} />
  );
};
