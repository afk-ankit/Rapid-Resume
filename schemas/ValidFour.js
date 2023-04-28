import * as Yup from 'yup';
export const ValidFour = () =>
  Yup.object().shape({
    softSkill: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string()
            .required('Soft Skill is required')
            .min(3, 'Must be at least 3 letters')
            .max(25, 'Too many letters'),
          rating: Yup.number()
            .required('Soft Skill rating is required')
            .min(1, 'Rating must be at least 1')
            .max(5, 'Rating must be at most 5'),
        })
      )
      .min(1, 'At least one Skill is required'),
    technicalSkill: Yup.array()
      .of(
        Yup.object().shape({
          name: Yup.string()
            .required('Technical Skill is required')
            .min(3, 'Must be at least 3 letters')
            .max(25, 'Too many letters'),
          rating: Yup.number()
            .required('Technical Skill rating is required')

            .min(1, 'Rating must be at least 1')
            .max(5, 'Rating must be at most 5'),
        })
      )
      .min(1, 'At least one Skill is required'),
  });
