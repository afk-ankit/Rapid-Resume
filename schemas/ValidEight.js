import * as Yup from 'yup';
export const ValidEight = () =>
  Yup.object().shape({
    hobby: Yup.array()
      .of(Yup.string().required('Enter the hobby'))
      .min(1, 'At least one Hobby is required'),
  });
