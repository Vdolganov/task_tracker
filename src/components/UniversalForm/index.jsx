import React, { useEffect, useState } from 'react';
import { Formik, Field } from 'formik';
import {
  TextField, TitleLayout, TextArea, Select, Input,
} from 'components/uiElements';
import { inputTypes } from 'utils/variables';

import { inputDataWrapper } from 'components/HOC/inputDataWrapper';

const componentByType = {
  [inputTypes.email]: inputDataWrapper(TextField),
  [inputTypes.text]: inputDataWrapper(TextField),
  [inputTypes.password]: inputDataWrapper(TextField),
  [inputTypes.select]: inputDataWrapper(Select),
  [inputTypes.textarea]: inputDataWrapper(TextArea),
  [inputTypes.radio]: inputDataWrapper(Input),
  [inputTypes.range]: inputDataWrapper(Input),
  [inputTypes.checkbox]: inputDataWrapper(Input),
};

const getSuitableComponent = (type) => componentByType[type];

const formatName = (str) => (typeof str === 'string' ? str.replace(/\s/g, '_').toLowerCase() : new Error());

export const UniversalForm = ({ formSchema, onRealSubmit, onCancel }) => {
  const [initialValues, setInitialValues] = useState(null);

  const convertInitialValues = (sch) => ((!sch.fields || !sch.fields.length) ? null
    : sch.fields.reduce((accumulator, field) => {
      accumulator[formatName(field.name)] = '';
      return accumulator;
    }, {}));

  useEffect(() => {
    const initData = convertInitialValues(formSchema);
    setInitialValues(initData);
  }, []);

  const generateButtons = () => ((formSchema.buttons && formSchema.buttons.length) ? formSchema.buttons.map((butt) => (
    <button
      type={butt.type === 'accept' ? 'submit' : 'button'}
      onClick={
                butt.type === 'cancel' ? onCancel : () => {}
              }
    >
      {butt.text}

    </button>
  )) : false);

  return (
    <div>
      <Formik
        initialValues={{ ...initialValues }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onRealSubmit(values);
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
                  formSchema.fields.map((field) => (
                    <TitleLayout
                      title={field.name}
                      error={errors.email && touched.email}
                      errorText={errors.email}
                      key={field.name}
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
            {
              generateButtons()
            }
          </form>
        )}
      </Formik>
    </div>
  );
};
