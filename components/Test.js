import { Field, FieldArray, Form, Formik } from 'formik';
import Test2 from './Test2';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { populate } from '@/store/slice/userSlice';

const Test = () => {
  const count = useSelector((state) => state.user.count);
  const dispatch = useDispatch();
  const initialValues = {
    name: '',
    phone: [''],
    email: [''],
  };
  const onsubmit = (values) => {
    console.log(values);
    dispatch(populate(values));
  };

  const [value, setValue] = useState(null);

  return (
    <Formik initialValues={initialValues} onSubmit={onsubmit}>
      <Form>
        <Field name="name" />
        <button type="submit">Submit</button>
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
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={value}
            onChange={(newValue) => {
              console.log(format(newValue?.$d, 'MM/dd/yyyy'));
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
      </Form>
    </Formik>
  );
};

export default Test;
