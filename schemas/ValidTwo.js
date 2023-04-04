import * as Yup from 'yup';
export const ValidTwo = () =>
  Yup.object().shape({
    country: Yup.string().required('Country of origin is required'),
    phoneNumber: Yup.string().required('Phone Number is required'),
    language: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required('Language name is required'),
          rating: Yup.number()
            .required('Language rating is required')
            .min(0, 'Rating must be at least 1')
            .max(10, 'Rating must be at most 5'),
        })
      )
      .min(1, 'At least one language is required'),
  });
