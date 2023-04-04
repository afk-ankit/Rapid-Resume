import React from 'react';
import Container from '../utils/Container';
import Page from '../utils/Page';
import BtnGroup from '../utils/BtnGroup';
import { useDispatch } from 'react-redux';
import { populate } from '@/store/slice/userSlice';
import { FieldArray, Form, Formik } from 'formik';
import EducationInput from './Sixth/EducationInput';
import { format } from 'date-fns';
import { ValidSeven } from '@/schemas/ValidSeven';
const Seventh = () => {
  const dispatch = useDispatch();
  const initialValues = {
    job: [
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
    values.job.map((item) => {
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
        validationSchema={ValidSeven}
      >
        {(formik) => (
          <Form>
            <Page>
              <FieldArray
                name="job"
                render={(arrayHelpers) => (
                  <EducationInput
                    form={arrayHelpers.form}
                    push={arrayHelpers.push}
                    remove={arrayHelpers.remove}
                    title="job"
                  />
                )}
              />
            </Page>
            <BtnGroup
              prev={'/form/sixth'}
              next={'/form/eighth'}
              onSubmit={formik.handleSubmit}
              isValid={formik.dirty && formik.isValid}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Seventh;
