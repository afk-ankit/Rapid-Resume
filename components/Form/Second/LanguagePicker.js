import lang from '@/public/languageNames.json';
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
import { useEffect, useState } from 'react';
const lang2 = Object.entries(lang);
const language = lang2.map((item) => item[1].name);

const LanguagePicker = ({ form, push, remove, setChoosen, choosen }) => {
  const { values } = form;
  const defaultArr = values.language.map((item) => language);
  const isMobile = useWindowWidth() < 850;
  const [availableLanguages, setAvailableLanguages] = useState(language);
  const [selectedLanguages, setSelectedLanguages] = useState(
    new Array(language.length).fill(null)
  );
  useEffect(() => {
    console.log(choosen);
  }, [choosen, values]);

  return (
    <>
      <div>
        {values.language?.map((inputField, index) => (
          <div key={index} className={styles.languageContainer}>
            <Field name={`language[${index}].name`}>
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
                          Language
                        </InputLabel>
                        <Select
                          labelId="language-select"
                          id="language-select"
                          label="Select Language"
                          {...field}
                          value={selectedLanguages[index]}
                          onChange={(e) => {
                            setFieldValue(
                              `language[${index}].name`,
                              e.target.value
                            );
                            setAvailableLanguages((prevLanguages) =>
                              prevLanguages.filter(
                                (lang) => lang !== e.target.value
                              )
                            );
                            setSelectedLanguages((prevLanguages) => {
                              const newLanguages = [...prevLanguages];
                              newLanguages[index] = e.target.value;
                              return newLanguages;
                            });
                          }}
                          error={meta.touched && Boolean(meta.error)}
                        >
                          {language.map((value, count1) => (
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
            <Field name={`language[${index}].rating`}>
              {({ field, form, meta }) => {
                return (
                  <>
                    <div>
                      <FormGroup error={meta.error && meta.touched}>
                        <InputLabel
                          id="rating-select"
                          error={meta.error && meta.touched}
                        >
                          Fluency
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

                    {values.language.length > 1 && !isMobile && (
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
                    {values.language.length > 1 && isMobile && (
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
            Add another Language
          </Button>
        </div>
      </div>
    </>
  );
};

export default LanguagePicker;
