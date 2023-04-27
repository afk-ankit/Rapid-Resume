import React, { useState } from 'react';
import { FieldArray, Form, Formik } from 'formik';
import Autocomplete1 from './Form/Fourth/Autocomplete';

const Test = () => {
  const [value, setValue] = useState(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event, newInputValue) => {
    setValue(newInputValue);
  };

  const initialValues = {
    softSkill: [{ name: '', rating: 0 }],
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
      >
        <Form>
          <FieldArray
            name="softSkill"
            render={(arrayHelpers) => {
              return (
                <Autocomplete1
                  form={arrayHelpers.form}
                  push={arrayHelpers.push}
                  remove={arrayHelpers.remove}
                />
              );
            }}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Test;
