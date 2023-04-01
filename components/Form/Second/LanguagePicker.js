import { useEffect, useState } from 'react';
import language from '@/public/languageNames.json';
import styles from '@/styles/LanguagePicker.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import softSkill from '@/public/softSkill.json';
import technicalSkill from '@/public/technicalSkill.json';

import {
  Button,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  IconButton,
  FormControl,
} from '@mui/material';
import { Field, FieldArray, Form, Formik, useFormikContext } from 'formik';
const languageArr = Object.entries(language);

const LanguagePicker = ({ label1, label2, initialValues, onSubmit }) => {
  let skill;
  label1 === 'Soft-Skills' ? (skill = softSkill) : (skill = technicalSkill);

  const formik = useFormikContext();
  console.log('sdfjkasdfkj', formik);

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <FieldArray name="language">
          {({ push, remove, form }) => {
            // console.log(form);
            const { values } = form;
            const { language } = values;
            return (
              <div>
                {language.map((inputField, index) => (
                  <div key={index} className={styles.languageContainer}>
                    <Field name={`language[${index}].name`}>
                      {({ form, field, meta }) => {
                        // console.log('❤️ name', field);
                        return (
                          <>
                            <div className={styles.language}>
                              <FormControl fullWidth>
                                <InputLabel id="language-select">
                                  {label1}
                                </InputLabel>
                                <Select
                                  labelId="language-select"
                                  id="language-select"
                                  label="Select Language"
                                  {...field}
                                >
                                  {label1 == 'Language'
                                    ? languageArr.map((value, count1) => (
                                        <MenuItem
                                          value={value[1].name}
                                          key={count1}
                                        >
                                          {value[1].name}
                                        </MenuItem>
                                      ))
                                    : skill.map((value, count1) => (
                                        <MenuItem value={value} key={count1}>
                                          {value}
                                        </MenuItem>
                                      ))}
                                </Select>
                              </FormControl>
                            </div>
                          </>
                        );
                      }}
                    </Field>
                    <Field name={`language[${index}].rating`}>
                      {({ field, form, meta }) => {
                        // console.log('🔥rating', field);
                        return (
                          <>
                            <div>
                              <InputLabel id="rating-select">
                                {label2}
                              </InputLabel>
                              <Rating
                                name="simple-controlled"
                                size="large"
                                labelId="rating-select"
                                {...field}
                              />
                            </div>

                            <IconButton
                              className={styles.delete}
                              size="large"
                              color="primary"
                              onClick={() => {
                                remove(index);
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </>
                        );
                      }}
                    </Field>
                  </div>
                ))}
                <Button
                  variant="contained"
                  fullWidth
                  style={{ marginBottom: '1rem' }}
                  onClick={() => {
                    push({ name: '', rating: 0 });
                  }}
                >
                  Add {label1}
                </Button>
              </div>
            );
          }}
        </FieldArray>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default LanguagePicker;
