import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Page from '../utils/Page';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import EducationInput from './Sixth/EducationInput';
import { FieldArray, Form, Formik } from 'formik';
import { format } from 'date-fns';
import { useDispatch } from 'react-redux';
import { populate } from '@/store/slice/userSlice';

const Sixth = () => {
  const dispatch = useDispatch();
  const initialValues = {
    education: [
      {
        name: '',
        field: '',
        startDate: null,
        endDate: null,
        proud: ['', '', ''],
      },
    ],
  };

  const onSubmit = (values) => {
    values.education.map((item) => {
      item.startDate = format(item.startDate.$d, 'MM/yyyy');
      item.endDate = format(item.endDate.$d, 'MM/yyyy');
    });
    console.log(values);
    dispatch(populate(values));
  };

  return (
    <Container>
      <Page>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <FieldArray
              name="education"
              render={(arrayHelpers) => (
                <EducationInput
                  form={arrayHelpers.form}
                  push={arrayHelpers.push}
                  remove={arrayHelpers.remove}
                  title="education"
                />
              )}
            />

            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Page>

      <BtnGroup prev={'/form/fifth'} next={'/form/seventh'} />
    </Container>
  );
};

export default Sixth;
