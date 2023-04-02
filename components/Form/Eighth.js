import React from 'react';
import Container from '../utils/Container';
import Page from '../utils/Page';
import { FieldArray, Form, Formik } from 'formik';
import HobbyInput from './Eighth/HobbyInput';
import BtnGroup from '../utils/BtnGroup';
import { useDispatch } from 'react-redux';
import { populate } from '@/store/slice/userSlice';

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
      <Page>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <Form>
            <FieldArray component={HobbyInput} name="hobby" />
            <button type="subimt">Submit</button>
          </Form>
        </Formik>
        <BtnGroup prev={'/form/seventh'} next={'/form/ninth'} />
      </Page>
    </Container>
  );
};

export default Eighth;
