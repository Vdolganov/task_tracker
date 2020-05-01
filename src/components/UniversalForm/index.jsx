import React, { useEffect, useState } from 'react';
import { Formik, Field } from 'formik';
import * as Yup from 'yup';
import { TitleLayout } from 'components/uiElements';
import { componentByType } from 'components/UniversalForm/componentByType';

const regExpContent = /\(([^)]+)\)/;
const regExpAll = /\(([^}]+)\)+/g;
const regExpEmpty = /\(()\)+/g;

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

  const getStringWithoutParentheses = (str) => {
    const clean = str.replace(regExpAll, '');
    return clean.replace(regExpEmpty, '');
  };

  const generateValidationSchema = () => ((!formSchema.fields || !formSchema.fields.length) ? null
    : formSchema.fields.reduce((accum, field) => {
      if (field.validation) {
        const validation = field.validation.split('.');
        let obj = null;

        validation.forEach((substr) => {
          const matches = regExpContent.exec(substr);
          let content = [];
          if (matches && matches[1]) {
            content = matches[1].split(',');
            content.forEach((el) => el.trim());
          }
          const cleanMethodName = getStringWithoutParentheses(substr);

          if (obj === null) {
            obj = Yup;
          }
          obj = obj[cleanMethodName](...content);
        });
        accum[formatName(field.name)] = obj;
      }
      return accum;
    }, {}));

  const generateButtons = () => ((formSchema.buttons && formSchema.buttons.length)
    ? formSchema.buttons.map((butt) => (
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
        validationSchema={
            Yup.object().shape({
              ...generateValidationSchema(),
            })
        }

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            onRealSubmit(values);
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          formik,
          isSubmitting,
          isValid,
          dirty,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            {
                  formSchema.fields.map((field) => (
                    <TitleLayout
                      title={field.name}
                      error={errors[formatName(field.name)] && touched[formatName(field.name)]}
                      errorText={errors[formatName(field.name)]}
                      key={formatName(field.name)}
                    >

                      <Field
                        as={getSuitableComponent(field.type)}
                        type={field.type}
                        name={formatName(field.name)}
                        selectArray={field.options ? field.options : null}
                        min={(field && field.range && field.range.min
                            !== undefined) ? field.range.min : null}
                        max={(field && field.range && field.range.max) ? field.range.max : null}
                      />
                    </TitleLayout>

                  ))
              }
            <button type="submit" disabled={!dirty || !isValid}>Save</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
