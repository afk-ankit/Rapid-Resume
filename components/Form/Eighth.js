import React from 'react';
import Container from '../utils/Container';
import Page from '../utils/Page';
import { FieldArray, Form, Formik } from 'formik';
import HobbyInput from './Eighth/HobbyInput';
import BtnGroup from '../utils/BtnGroup';
import { useDispatch } from 'react-redux';
import { populate } from '@/store/slice/userSlice';
import { ValidEight } from '@/schemas/ValidEight';

const Eighth = () => {
  const dispatch = useDispatch();
  const initialValues = {
    hobby: [''],
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(populate(values));
  };

  return (
    <Container>
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
              isValid={formik.dirty && formik.isValid}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Eighth;
