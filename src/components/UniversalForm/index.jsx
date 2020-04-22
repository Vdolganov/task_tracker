import React, { useEffect, useState } from 'react';
import { Formik, Field } from 'formik';
import {
  TextField, TitleLayout, TextArea, Select,
} from 'components/uiElements';
import { inputTypes } from 'utils/variables';

const schema = {
  fields: [
    {
      type: inputTypes.text,
      name: 'Title',
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
  ],
  buttons: [
    { text: 'save', type: 'accept' },
    { text: 'cancel', type: 'cancel' },
  ],
};

const componentByType = {
  [inputTypes.email]: TextField,
  [inputTypes.text]: TextField,
  [inputTypes.password]: TextField,
  [inputTypes.select]: Select,
  [inputTypes.textarea]: TextArea,
  [inputTypes.radio]: 'input',
  [inputTypes.range]: 'input',
  [inputTypes.checkbox]: 'input',

};

const formatName = (str) => (typeof str === 'string' ? str.replace(/\s/g, '_').toLowerCase() : new Error());

const getSuitableComponent = (type) => componentByType[type];


export const UniversalForm = () => {
  const [initialValues, setInitialValues] = useState(null);

  const convertInitialValues = (sch) => ((!sch.fields || !sch.fields.length) ? null
    : sch.fields.reduce((accumulator, field) => {
      accumulator[formatName(field.name)] = '';
      return accumulator;
    }, {}));

  useEffect(() => {
    const initData = convertInitialValues(schema);
    setInitialValues(initData);
  }, []);

  return (
    <div>
      <pre>
        {JSON.stringify(initialValues)}
      </pre>
      <Formik
        initialValues={{ ...initialValues }}

        onSubmit={(values, { setSubmitting }) => {
          console.log('vvvvv', values);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>

            {
                  schema.fields.map((field) => (
                    <TitleLayout
                      title={field.name}
                      error={errors.email && touched.email}
                      errorText={errors.email}
                    >
                      <Field
                        as={getSuitableComponent(field.type)}
                        type={field.type}
                        name={formatName(field.name)}
                        selectArray={field.options ? field.options : null}
                        min={(field && field.range && field.range.min) ? field.range.min : null}
                        max={(field && field.range && field.range.max) ? field.range.max : null}
                      />
                    </TitleLayout>

                  ))
              }

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
