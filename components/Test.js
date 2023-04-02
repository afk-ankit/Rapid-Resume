import { Field, FieldArray, Form, Formik } from 'formik';
import Test2 from './Test2';

const Test = () => {
  const initialValues = {
    name: '',
    phone: [''],
    email: [''],
  };
  const onsubmit = (values) => {
    console.log(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onsubmit}>
      <Form>
        <Field name="name" />
        <button>Submit</button>
        <FieldArray name="phone">
          {({ push, remove, form }) => {
            const { values } = form;
            const { phone } = values;
            return (
              <div>
                {phone.map((item, index) => (
                  <div key={index}>
                    <Field name={`phone[${index}]`} />
                    <button onClick={() => remove(index)}>-</button>
                    <button onClick={() => push('')}>+</button>
                  </div>
                ))}
              </div>
            );
          }}
        </FieldArray>
        <FieldArray
          name="email"
          render={(arrayHelpers) => (
            <Test2 form={arrayHelpers.form} boka="ankit" />
          )}
        />
      </Form>
    </Formik>
  );
};

export default Test;
