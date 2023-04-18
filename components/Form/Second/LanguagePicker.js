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
import { Field, Form } from 'formik';
import useWindowWidth from '@/components/utils/useWindow';
import { Toaster, toast } from 'react-hot-toast';
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

  const isMobile = useWindowWidth() < 850;

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
                          error={meta.touched && Boolean(meta.error)}
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
                        {meta.error && meta.touched && (
                          <FormHelperText>{meta.error}</FormHelperText>
                        )}
                      </FormControl>
                    </div>
                  </>
                );
              }}
            </Field>
            <Field name={`${field}[${index}].rating`}>
              {({ field, form, meta }) => {
                console.log(meta);

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
            style={
              form.isValid
                ? { marginBottom: '1rem' }
                : { color: 'white', background: 'gray', marginBottom: '1rem' }
            }
            onClick={() => {
              push({ name: '', rating: 0 });
            }}
            disabled={!form.isValid}
            endIcon={<AddIcon />}
          >
            Add More {label1}
          </Button>
        </div>
      </div>
    </>
  );
};

export default LanguagePicker;
