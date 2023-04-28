import technicalSkill from '@/public/technicalSkill.json';
import softSkill from '@/public/softSkill.json';

import {
  Autocomplete,
  Button,
  FormGroup,
  IconButton,
  InputLabel,
  Rating,
  TextField,
} from '@mui/material';
import { Field } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from '@/styles/Autocomplete.module.scss';
import useWindowWidth from '@/components/utils/useWindow';

const Autocomplete1 = ({ form, push, remove, label1, label2 }) => {
  const { values } = form;
  const isMobile = useWindowWidth() < 850;

  let arr;
  if (label2 == 'softSkill') {
    arr = values.softSkill;
  }
  if (label2 == 'technicalSkill') {
    arr = values.technicalSkill;
  }
  return (
    <>
      <div className={styles.main}>
        {arr.map((item, index) => {
          return (
            <div className={styles.container}>
              <Field name={`${label2}[${index}].name`}>
                {({ field, meta, form }) => {
                  const { setFieldValue, setFieldTouched } = form;
                  console.log(meta.error);

                  return (
                    <Autocomplete
                      fullWidth
                      {...field}
                      onBlur={() =>
                        setFieldTouched(`${label2}[${index}].name`, true)
                      }
                      value={meta.value}
                      onChange={(e, value) => {
                        if (value) {
                          setFieldValue(`${label2}[${index}].name`, value);
                        }
                      }}
                      inputValue={meta.value}
                      onInputChange={(e, value) => {
                        setFieldValue(`${label2}[${index}].name`, value);
                      }}
                      options={
                        label2 == 'softSkill' ? softSkill : technicalSkill
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          error={meta.touched && Boolean(meta.error)}
                          helperText={meta.touched && meta.error}
                          label={`Type or select an ${label1}`}
                        />
                      )}
                    />
                  );
                }}
              </Field>
              <Field name={`${label2}[${index}].rating`}>
                {({ field, form, meta }) => {
                  return (
                    <>
                      <div>
                        <FormGroup error={meta.error && meta.touched}>
                          <InputLabel
                            id="rating-select"
                            error={meta.error && meta.touched}
                          >
                            Rating
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

                      {softSkill.length > 1 && !isMobile && (
                        <IconButton
                          size="large"
                          color="primary"
                          onClick={() => {
                            remove(index);
                          }}
                        >
                          <DeleteIcon />
                        </IconButton>
                      )}
                      {softSkill.length > 1 && isMobile && (
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
          );
        })}
      </div>
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
    </>
  );
};

export default Autocomplete1;
