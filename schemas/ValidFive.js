import * as Yup from 'yup';
export const ValidFive = () =>
  Yup.object().shape({
    about: Yup.string()
      .required('This is required')
      .min(100, 'Min 100 characters are required')
      .max(300, 'Max 300 characters'),
  });
