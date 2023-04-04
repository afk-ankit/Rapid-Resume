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
import { Field } from 'formik';
const languageArr = Object.entries(language);

const LanguagePicker = ({ label1, label2, form, push, remove, field }) => {
  let skill;
  label1 === 'Soft-Skills' ? (skill = softSkill) : (skill = technicalSkill);

  const { values } = form;
  let arr;

  if (field == 'language') {
    arr = values.language;
  }
  if (field == 'softSkill') {
    arr = values.softSkill;
  }
  if (field == 'technicalSkill') {
    arr = values.technicalSkill;
  }

  return (
    <>
      <div>
        {arr.map((inputField, index) => (
          <div key={index} className={styles.languageContainer}>
            <Field name={`${field}[${index}].name`}>
              {({ form, field, meta }) => {
                return (
                  <>
                    <div className={styles.language}>
                      <FormControl fullWidth>
                        <InputLabel id="language-select">{label1}</InputLabel>
                        <Select
                          labelId="language-select"
                          id="language-select"
                          label="Select Language"
                          {...field}
                        >
                          {label1 == 'Language'
                            ? languageArr.map((value, count1) => (
                                <MenuItem value={value[1].name} key={count1}>
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
            <Field name={`${field}[${index}].rating`}>
              {({ field, form, meta }) => {
                return (
                  <>
                    <div>
                      <InputLabel id="rating-select">{label2}</InputLabel>
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
    </>
  );
};

export default LanguagePicker;
