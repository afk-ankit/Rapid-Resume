import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Page from '../utils/Page';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import EducationInput from './Sixth/EducationInput';
import { FieldArray, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { populate } from '@/store/slice/userSlice';
import { ValidSix } from '@/schemas/ValidSix';
import { handleIsValid } from '../utils/handleIsValid';
import StepCount from '../utils/StepCount';
import moment from 'moment';

const Sixth = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);
  const savedData = Boolean(userData?.education[0].name);
  const [initialValues, setInitialValuse] = useState({
    education: [
      {
        name: '',
        field: '',
        startDate: null,
        endDate: null,
        proud: ['', '', ''],
      },
    ],
  });

  useEffect(() => {
    if (userData.education[0].name) {
      const newData = { ...userData };
      newData.education = newData.education.map((item) => {
        return {
          ...item,
          startDate: null,
          endDate: null,
        };
      });
      setInitialValuse(newData);
    }
  }, [userData]);

  const onSubmit = (values) => {
    values.education.map((item) => {
      item.pStartDate = moment(item.startDate?.$d).format('MM/yyyy');
      item.pEndDate = moment(item.endDate?.$d).format('MM/yyyy');
    });
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
