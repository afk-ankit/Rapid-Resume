import styles from '@/styles/First.module.scss';
import { TextField } from '@mui/material';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import Page from '../utils/Page';
import { useFormik } from 'formik';
import { ValidOne } from '@/schemas/ValidOne';
import { useDispatch } from 'react-redux';
import { populate } from '@/store/slice/userSlice';

const First = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: (values) => {
      console.log(values);
      dispatch(populate(values));
    },
    validationSchema: ValidOne,
  });

  return (
    <Container>
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
        isValid={formik.dirty && formik.isValid}
      />
    </Container>
  );
};

export default First;
