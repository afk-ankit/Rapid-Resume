import { Button } from '@mui/material';
import { Field, Form, Formik, useFormikContext } from 'formik';

const Test2 = ({ form, boka }) => {
  console.log(boka);
  const { values } = form;
  const { email } = values;
  return (
    <>
      {email.map((item, index) => (
        <div key={index}>
          <Field name={`email[${index}]`} />
        </div>
      ))}
    </>
  );
};

export default Test2;
