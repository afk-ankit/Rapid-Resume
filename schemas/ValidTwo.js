import * as Yup from 'yup';
export const ValidTwo = () =>
  Yup.object().shape({
    country: Yup.string().required('Country of origin is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
  });
