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

  const createBlurEvent = (newValue) => {
    const blurEvent = newValue.name ? newValue : {
      target: {
        type: 'blur',
        name: props.name,
      },
    };
    props.onBlur(blurEvent);
  };

  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <Component {...props} onChange={createEvent} onBlur={createBlurEvent} />
  );
};
