import {
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  TextField,
} from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import styles from '@/styles/Sixth.module.scss';
import { Field } from 'formik';
import AddIcon from '@mui/icons-material/Add';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

const EducationInput = ({
  form,
  push,
  remove,
  title,
  setDateValid,
  DateValid,
}) => {
  console.log(DateValid);
  const { values } = form;
  const { education, job } = values;
  let dateValid;
  let arr = [];
  if (title == 'education') {
    arr = values.education;
    dateValid = values.education;
  } else {
    arr = values.job;
    dateValid = values.job;
  }

  let label1;
  let label2;
  let label3;
  let label4;
  let label5;

  if (title == 'education') {
    label1 = 'Name of School/Educational place';
    label2 = 'Education i.e. Gymnasium or University degree';
    label3 = 'Top grades in English';
    label4 = 'Part of student advisory board';
    label5 = 'Received school award for outstanding result';
  } else {
    label1 = 'Job title';
    label2 = 'Company name';
    label3 = 'Work responsibilty 1';
    label4 = 'Work responsibilty 2';
    label5 = 'Work responsibilty 3';
  }

  return (
    <>
      {arr.map((inputField, index) => (
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          key={index}
        >
          <Field name={`${title}[${index}].name`}>
            {({ field, meta }) => (
              <TextField
                id="outlined-basic"
                label={label1}
                variant="outlined"
                fullWidth
                {...field}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
              />
            )}
          </Field>
          <Field name={`${title}[${index}].field`}>
            {({ field, meta }) => (
              <TextField
                id="outlined-basic"
                label={label2}
                variant="outlined"
                fullWidth
                {...field}
                error={meta.touched && Boolean(meta.error)}
                helperText={meta.touched && meta.error}
              />
            )}
          </Field>

          <LocalizationProvider dateAdapter={AdapterMoment}>
            <div className={styles.flex}>
              <Field name={`${title}[${index}].startDate`}>
                {({ form, field, meta }) => {
                  const { setFieldValue, setFieldTouched } = form;
                  return (
                    <FormControl
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      onBlur={() => {
                        setFieldTouched(`${title}[${index}].startDate`, true);
                      }}
                    >
                      <DatePicker
                        label="Choose Starting Date"
                        views={['year', 'month']}
                        className={styles.fullWidth}
                        {...field}
                        onChange={(val) => {
                          setFieldValue(`${title}[${index}].startDate`, val);
                        }}
                        disableFuture
                        minDate={new moment('2000-01-01T00:00:00.000Z')}
                      />
                      {meta.error && meta.touched && (
                        <FormHelperText>Start Date is Required</FormHelperText>
                      )}
                    </FormControl>
                  );
                }}
              </Field>
              <Field name={`${title}[${index}].endDate`}>
                {({ form, field, meta }) => {
                  const endDate = dateValid[index].endDate;
                  const startDate = dateValid[index].startDate;
                  const isEndValid = endDate?.isAfter(startDate);
                  if (isEndValid) setDateValid(true);
                  if (!isEndValid) setDateValid(false);

                  const { setFieldValue, setFieldTouched, setFieldError } =
                    form;
                  return (
                    <FormControl
                      fullWidth
                      error={meta.touched && Boolean(meta.error)}
                      onBlur={() => {
                        setFieldTouched(`${title}[${index}].endDate`, true);
                      }}
                    >
                      <DatePicker
                        label="Choose Ending Date"
                        views={['year', 'month']}
                        minDate={new moment('2000-01-01T00:00:00.000Z')}
                        className={styles.fullWidth}
                        {...field}
                        onChange={(val) => {
                          setFieldValue(`${title}[${index}].endDate`, val);
                        }}
                      />
                      {meta.error && meta.touched && (
                        <FormHelperText>Ending Date is required</FormHelperText>
                      )}
                      {!isEndValid && meta.touched && (
                        <FormHelperText style={{ color: 'red' }}>
                          End Date must be greater than Starting Date
                        </FormHelperText>
                      )}
                    </FormControl>
                  );
                }}
              </Field>
            </div>
            <h3 className={styles.label}>
              Three things you are proud of (Optional)
            </h3>
            <Field name={`${title}[${index}].proud[0]`}>
              {({ field }) => (
                <TextField
                  id="outlined-basic"
                  placeholder={label3}
                  variant="outlined"
                  fullWidth
                  {...field}
                />
              )}
            </Field>
            <Field name={`${title}[${index}].proud[1]`}>
              {({ field }) => (
                <TextField
                  id="outlined-basic"
                  placeholder={label4}
                  variant="outlined"
                  fullWidth
                  {...field}
                />
              )}
            </Field>
            <Field name={`${title}[${index}].proud[2]`}>
              {({ field }) => (
                <TextField
                  id="outlined-basic"
                  placeholder={label5}
                  variant="outlined"
                  fullWidth
                  {...field}
                />
              )}
            </Field>
          </LocalizationProvider>
          {arr.length > 1 && (
            <Button
              variant="contained"
              style={{ background: 'red', alignSelf: 'center' }}
              onClick={() => remove(index)}
            >
              Delete
            </Button>
          )}
          <hr />
        </div>
      ))}
      <Button
        style={
          Boolean(form.isValid && DateValid)
            ? { alignSelf: 'center' }
            : { alignSelf: 'center', background: 'gray', color: 'white' }
        }
        variant="contained"
        onClick={() => {
          push({
            name: '',
            field: '',
            startDate: null,
            endDate: null,
            proud: ['', '', ''],
          });
        }}
        endIcon={<AddIcon />}
        disabled={Boolean(!form.isValid && !DateValid)}
      >
        Add More {title}s
      </Button>
    </>
  );
};

export default EducationInput;
