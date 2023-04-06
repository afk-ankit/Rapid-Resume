import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
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
import StepCount from '../utils/StepCount';
import moment from 'moment';

const Sixth = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);
  const savedData = Boolean(userData.education);

  {
    userData.education &&
      userData.education.map((item) => {
        item.startDate = null;
        item.endDate = null;
      });
  }

  const initialValues = userData || {
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
      item.pStartDate = moment(item.startDate?.$d).format('MM/yyyy');
      item.pEndDate = moment(item.endDate?.$d).format('MM/yyyy');
    });
    console.log(values);
    dispatch(populate(values));
  };

  return (
    <Container>
      <StepCount count={5} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ValidSix}
        enableReinitialize={true}
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
