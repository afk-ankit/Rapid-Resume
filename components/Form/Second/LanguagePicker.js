import language from '@/public/languageNames.json';
import styles from '@/styles/LanguagePicker.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import softSkill from '@/public/softSkill.json';
import technicalSkill from '@/public/technicalSkill.json';
import AddIcon from '@mui/icons-material/Add';

import {
  Button,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  IconButton,
  FormControl,
  FormHelperText,
  FormGroup,
} from '@mui/material';
import { Field } from 'formik';
import useWindowWidth from '@/components/utils/useWindow';
import { useState } from 'react';
const languageArr = Object.entries(language);

const LanguagePicker = ({ label1, label2, form, push, remove, tag }) => {
  let skill;
  label1 === 'Soft-Skills' ? (skill = softSkill) : (skill = technicalSkill);

  const { values } = form;
  let arr;

  if (tag == 'language') {
    arr = values.language;
  }
  if (tag == 'softSkill') {
    arr = values.softSkill;
  }
  if (tag == 'technicalSkill') {
    arr = values.technicalSkill;
  }

  const reducedLang = languageArr.map((item) => item[1].name);

  const isMobile = useWindowWidth() < 850;

  return (
    <>
      <div>
        {arr.map((inputField, index) => (
          <div key={index} className={styles.languageContainer}>
            <Field name={`${tag}[${index}].name`}>
              {({ form, field, meta }) => {
                const { setFieldValue } = form;
                return (
                  <>
                    <div className={styles.language}>
                      <FormControl
                        fullWidth
                        error={meta.touched && Boolean(meta.error)}
                      >
                        <InputLabel
                          id="language-select"
                          error={meta.touched && Boolean(meta.error)}
                        >
                          {label1}
                        </InputLabel>
                        <Select
                          labelId="language-select"
                          id="language-select"
                          label="Select Language"
                          {...field}
                          onChange={(e) => {
                            setFieldValue(
                              `${tag}[${index}].name`,
                              e.target.value
                            );
                          }}
                          error={meta.touched && Boolean(meta.error)}
                        >
                          {label1 == 'Language'
                            ? reducedLang.map((value, count1) => (
                                <MenuItem value={value} key={count1}>
                                  {value}
                                </MenuItem>
                              ))
                            : skill.map((value, count1) => (
                                <MenuItem value={value} key={count1}>
                                  {value}
                                </MenuItem>
                              ))}
                        </Select>
                        {meta.error && meta.touched && (
                          <FormHelperText>{meta.error}</FormHelperText>
                        )}
                      </FormControl>
                    </div>
                  </>
                );
              }}
            </Field>
            <Field name={`${tag}[${index}].rating`}>
              {({ field, form, meta }) => {
                return (
                  <>
                    <div>
                      <FormGroup error={meta.error && meta.touched}>
                        <InputLabel
                          id="rating-select"
                          error={meta.error && meta.touched}
                        >
                          {label2}
                        </InputLabel>
                        <Rating
                          name="simple-controlled"
                          size="large"
                          labelId="rating-select"
                          {...field}
                        />
                        {meta.error && meta.touched && (
                          <FormHelperText>{meta.error}</FormHelperText>
                        )}
                      </FormGroup>
                    </div>

                    {arr.length > 1 && !isMobile && (
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
                    )}
                    {arr.length > 1 && isMobile && (
                      <Button
                        variant="contained"
                        style={{ background: 'red', alignSelf: 'center' }}
                        onClick={() => remove(index)}
                      >
                        Delete
                      </Button>
                    )}
                  </>
                );
              }}
            </Field>
          </div>
        ))}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            variant="contained"
            onClick={() => {
              push({ name: '', rating: 0 });
            }}
            endIcon={<AddIcon />}
          >
            Add another {label1}
          </Button>
        </div>
      </div>
    </>
  );
};

export default LanguagePicker;
