import { Field, FieldArray, Form, Formik } from 'formik';

const Test = () => {
  const initialValues = {
    name: '',
    phone: [''],
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
                    <Field name={`phone[${index}]`}>
                      {({ field }) => {
                        console.log(field);
                        return <input />;
                      }}
                    </Field>
                    <button onClick={() => remove(index)}>-</button>
                    <button onClick={() => push('')}>+</button>
                  </div>
                ))}
              </div>
            );
          }}
        </FieldArray>
      </Form>
    </Formik>
  );
};

export default Test;
