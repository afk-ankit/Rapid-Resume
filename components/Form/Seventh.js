import React, { useEffect, useState } from 'react';
import Container from '../utils/Container';
import Page from '../utils/Page';
import BtnGroup from '../utils/BtnGroup';
import { useDispatch, useSelector } from 'react-redux';
import { populate } from '@/store/slice/userSlice';
import { FieldArray, Form, Formik } from 'formik';
import EducationInput from './Sixth/EducationInput';
import { format } from 'date-fns';
import { ValidSeven } from '@/schemas/ValidSeven';
import { handleIsValid } from '../utils/handleIsValid';
import StepCount from '../utils/StepCount';
import moment from 'moment';
const Seventh = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);
  const savedData = Boolean(userData?.job[0].name);
  const [dateValid, setDateValid] = useState(true);
  const [initialValues, setInitialValuse] = useState({
    job: [
      {
        name: '',
        field: '',
        startDate: null,
        endDate: null,
        currWorking: false,
        proud: ['', '', ''],
      },
    ],
  });

  useEffect(() => {
    if (userData.job[0].name) {
      const newData = { ...userData };
      newData.job = newData.job.map((item) => {
        return {
          ...item,
          startDate: moment(item.startDate),
          endDate: moment(item.endDate),
        };
      });
      setInitialValuse(newData);
    }
  }, [userData]);

  
  const onSubmit = (values) => {
    values.job.map((item) => {
      item.pStartDate = moment(item.startDate).format('MM/yyyy');
      item.pEndDate = moment(item.endDate).format('MM/yyyy');
    });
    dispatch(populate(values));
  };

  return (
    <Container>
      <StepCount count={6} />

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ValidSeven}
        enableReinitialize={true}
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
                    setDateValid={setDateValid}
                    DateValid={dateValid}
                  />
                )}
              />
            </Page>
            <BtnGroup
              prev={'/form/sixth'}
              next={'/form/eighth'}
              onSubmit={formik.handleSubmit}
              isValid={handleIsValid(
                savedData,
                formik.dirty,
                formik.isValid && dateValid
              )}
            />
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default Seventh;
