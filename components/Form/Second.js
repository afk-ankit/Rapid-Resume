import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import Page from '../utils/Page';
import country from '@/public/countryNames.json';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import LanguagePicker from './Second/LanguagePicker';
import { Field, FieldArray, Form, Formik, useFormik } from 'formik';
import { ValidTwo } from '@/schemas/ValidTwo';

const arr = Object.entries(country);

const Second = () => {
  const initialValues = {
    country: '',
    phoneNumber: '',
    language: [{ name: '', rating: 0 }],
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Page>
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Country of origin
              </InputLabel>
              <Field name="country">
                {({ field }) => {
                  return (
                    <Select
                      required={true}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="Country of origin"
                      {...field}
                    >
                      {arr.map((item, count) => (
                        <MenuItem value={item[1].country} key={count}>
                          {item[1].country}
                        </MenuItem>
                      ))}
                    </Select>
                  );
                }}
              </Field>
            </FormControl>
            <Field name="phoneNumber">
              {({ field }) => (
                <TextField
                  id="filled-basic"
                  label="Phone Number"
                  variant="outlined"
                  {...field}
                />
              )}
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
          <button>submit</button>
          <BtnGroup prev="/form/first" next={'/form/third'} />
        </Form>
      </Formik>
    </Container>
  );
};

export default Second;
