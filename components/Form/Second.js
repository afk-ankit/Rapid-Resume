import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import Page from '../utils/Page';
import country from '@/public/countryNames.json';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import LanguagePicker from './Second/LanguagePicker';
import { Field, FieldArray, Form, Formik, useFormik } from 'formik';
import { ValidTwo } from '@/schemas/ValidTwo';
import { useDispatch } from 'react-redux';
import { populate } from '@/store/slice/userSlice';

const arr = Object.entries(country);

const Second = () => {
  const dispatch = useDispatch();

  const initialValues = {
    country: '',
    phoneNumber: '',
    language: [{ name: '', rating: 0 }],
  };

  const onSubmit = (values) => {
    dispatch(populate(values));
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={ValidTwo}
      >
        {(formik) => {
          return (
            <Form>
              <Page>
                <Field name="country">
                  {({ field, meta }) => {
                    console.log('🔥🔥', meta);
                    return (
                      <>
                        <FormControl
                          error={meta.touched && Boolean(meta.error)}
                        >
                          <InputLabel
                            id="demo-simple-select-label"
                            error={meta.touched && Boolean(meta.error)}
                            helperText={meta.touched && meta.error}
                          >
                            Country of origin
                          </InputLabel>
                          <Select
                            required={true}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            label="Country of origin"
                            {...field}
                            error={meta.touched && Boolean(meta.error)}
                            helperText={meta.touched && meta.error}
                          >
                            {arr.map((item, count) => (
                              <MenuItem value={item[1].country} key={count}>
                                {item[1].country}
                              </MenuItem>
                            ))}
                          </Select>
                          {meta.error && (
                            <FormHelperText variant="error">
                              {meta.error}
                            </FormHelperText>
                          )}
                        </FormControl>
                      </>
                    );
                  }}
                </Field>
                <Field name="phoneNumber">
                  {({ field, meta }) => {
                    console.log(meta);
                    return (
                      <TextField
                        id="filled-basic"
                        label="Phone Number"
                        variant="outlined"
                        {...field}
                        error={meta.touched && Boolean(meta.error)}
                        helperText={meta.touched && meta.error}
                      />
                    );
                  }}
                </Field>
                <FieldArray
                  name="language"
                  render={(arrayHelpers) => (
                    <LanguagePicker
                      label1={'Language'}
                      label2={'Fluency'}
                      form={arrayHelpers.form}
                      push={arrayHelpers.push}
                      remove={arrayHelpers.remove}
                      field={'language'}
                    />
                  )}
                />
              </Page>
              <BtnGroup
                prev="/form/first"
                next={'/form/third'}
                isValid={formik.dirty && formik.isValid}
                onSubmit={formik.handleSubmit}
              />
            </Form>
          );
        }}
      </Formik>
    </Container>
  );
};

export default Second;
