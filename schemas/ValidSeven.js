import * as Yup from 'yup';
export const ValidSeven = () =>
  Yup.object().shape({
    job: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string().required('Job title is required'),
          field: Yup.string().required('Company Name is required'),
          startDate: Yup.date().required('Starting Date is required'),
          endDate: Yup.date().required('Ending Date is required'),
        })
      )
      .min(1, 'At least one Skill is required'),
  });
