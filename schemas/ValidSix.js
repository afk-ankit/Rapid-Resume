import * as Yup from 'yup';
export const ValidSix = () =>
  Yup.object().shape({
    education: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required('Name of education place is required'),
          field: Yup.string().required('Field of education is required'),
          startDate: Yup.date().required('Starting Date is required'),
          endDate: Yup.date().required('Ending Date is required'),
        })
      )
      .min(1, 'At least one Skill is required'),
  });
