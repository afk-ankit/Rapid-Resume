import Page from '../utils/Page';
import Container from '@/components/utils/Container';
import softSkill from '@/public/softSkill.json';
import { Button } from '@mui/material';
import LanguagePicker from './Second/LanguagePicker';
import BtnGroup from '../utils/BtnGroup';
import { FieldArray, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { populate } from '@/store/slice/userSlice';

const Fourth = () => {
  const dispatch = useDispatch();
  const initialValues = {
    softSkill: [
      {
        name: '',
        rating: 0,
      },
    ],
    technicalSkill: [
      {
        name: '',
        rating: 0,
      },
    ],
  };

  const onSubmit = (values) => {
    console.log(values);
    dispatch(populate(values));
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Page>
            <FieldArray
              name="softSkill"
              render={(arrayHelpers) => (
                <LanguagePicker
                  label1={'Soft-Skills'}
                  label2={'Skill'}
                  form={arrayHelpers.form}
                  push={arrayHelpers.push}
                  remove={arrayHelpers.remove}
                  field={'softSkill'}
                />
              )}
            />
            <FieldArray
              name="technicalSkill"
              render={(arrayHelpers) => (
                <LanguagePicker
                  label1={'Technical-Skills'}
                  label2={'Skill'}
                  form={arrayHelpers.form}
                  push={arrayHelpers.push}
                  remove={arrayHelpers.remove}
                  field={'technicalSkill'}
                />
              )}
            />
          </Page>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <BtnGroup prev={'/form/third'} next={'/form/fifth'} />
    </Container>
  );
};

export default Fourth;
