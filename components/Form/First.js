import styles from '@/styles/First.module.scss';
import { Step, StepLabel, Stepper, TextField } from '@mui/material';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import Page from '../utils/Page';
import { useFormik } from 'formik';
import { ValidOne } from '@/schemas/ValidOne';
import { useDispatch, useSelector } from 'react-redux';
import { populate } from '@/store/slice/userSlice';
import { handleIsValid } from '../utils/handleIsValid';
import StepCount from '../utils/StepCount';

const First = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state);

  const savedData =
    Boolean(userData.firstName) ||
    Boolean(userData.lastName) ||
    Boolean(userData.email);

  const formik = useFormik({
    initialValues: {
      firstName: userData.firstName || '',
      lastName: userData.lastName || '',
      email: userData.email || '',
    },
    onSubmit: (values) => {
      dispatch(populate(values));
    },
    validationSchema: ValidOne,
    enableReinitialize: true,
  });

  return (
    <Container>
      <StepCount count={0} />
      <Page>
        <TextField
          id="filled-basic"
          label="First Name"
          variant="outlined"
          name="firstName"
          {...formik.getFieldProps('firstName')}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          id="filled-basic"
          name="lastName"
          label="Last Name"
          variant="outlined"
          {...formik.getFieldProps('lastName')}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          id="filled-basic"
          label="Email"
          name="email"
          variant="outlined"
          {...formik.getFieldProps('email')}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Page>

      <BtnGroup
        prev="/"
        next="/form/second"
        onSubmit={formik.handleSubmit}
        isValid={handleIsValid(savedData, formik.dirty, formik.isValid)}
        single={true}
      />
    </Container>
  );
};

export default First;
