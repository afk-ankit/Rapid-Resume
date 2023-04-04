import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Page from '../utils/Page';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import EducationInput from './Sixth/EducationInput';
import { FieldArray, Form, Formik } from 'formik';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { populate } from '@/store/slice/userSlice';
import { ValidSix } from '@/schemas/ValidSix';
import { handleIsValid } from '../utils/handleIsValid';

const Sixth = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);
  const savedData = Boolean(userData.education);

  const initialValues = {
    education: userData.education || [
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
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ValidSix}
        enableReinitialize
      >
        {(formik) => (
          <Form>
            <Page>
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
            </Page>
            <BtnGroup
              prev={'/form/fifth'}
              next={'/form/seventh'}
              onSubmit={formik.handleSubmit}
              isValid={handleIsValid(savedData, formik.dirty, formik.isValid)}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Sixth;
