import React from 'react';
import Container from '../utils/Container';
import Page from '../utils/Page';
import styles from '@/styles/Fifth.module.scss';
import BtnGroup from '../utils/BtnGroup';
import { useFormik } from 'formik';
import { ValidFive } from '@/schemas/ValidFive';
import { useDispatch } from 'react-redux';
import { populate } from '@/store/slice/userSlice';

const Fifth = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      about: '',
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(populate(values));
    },
    validationSchema: ValidFive,
  });

  const handleStyle = (value1, value2) => {
    if (value1 && value2) {
      return {
        outline: '1px solid #d32f2f',
        border: '0',
      };
    } else {
      return { outline: '1px solid #006FCC', border: '0' };
    }
  };

  return (
    <Container>
      <Page>
        <div className={styles.type}>
          <h3>Describe yourself in a few sentences</h3>
          <textarea
            name="text"
            id=""
            style={handleStyle(formik.touched.about, formik.errors.about)}
            placeholder={`Tell us who you are, what motivates you or highlight some professional results from previous jobs. Example: ”Motivated jobseeker with 2 years of experience within Customer Service. I am driven by helping people and giving the best service to customers.”`}
            {...formik.getFieldProps('about')}
          ></textarea>
        </div>
        {formik.touched.about && formik.errors.about ? (
          <h3 className={styles.error}>*{formik.errors.about}</h3>
        ) : null}
      </Page>
      <button onClick={formik.handleSubmit}>Submit</button>
      <BtnGroup prev={'/form/fourth'} next={'/form/sixth'} />
    </Container>
  );
};

export default Fifth;
