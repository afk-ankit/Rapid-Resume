import React from 'react';
import Container from '../utils/Container';
import Page from '../utils/Page';
import { FieldArray, Form, Formik } from 'formik';
import HobbyInput from './Eighth/HobbyInput';
import BtnGroup from '../utils/BtnGroup';
import { useDispatch, useSelector } from 'react-redux';
import { populate } from '@/store/slice/userSlice';
import { ValidEight } from '@/schemas/ValidEight';
import { handleIsValid } from '../utils/handleIsValid';
import StepCount from '../utils/StepCount';

const Eighth = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);
  const initialValues = {
    hobby: userData.hobby || [''],
  };
  const savedData = Boolean(userData.hobby);
  const onSubmit = (values) => {
    dispatch(populate(values));
  };

  return (
    <Container>
      <StepCount count={7} />
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ValidEight}
      >
        {(formik) => (
          <Form>
            <Page>
              <FieldArray component={HobbyInput} name="hobby" />
            </Page>
            <BtnGroup
              prev={'/form/seventh'}
              next={'/form/ninth'}
              onSubmit={formik.handleSubmit}
              isValid={handleIsValid(savedData, formik.dirty, formik.isValid)}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Eighth;
