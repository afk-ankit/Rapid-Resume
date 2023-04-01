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
import { useFormik } from 'formik';
import { ValidTwo } from '@/schemas/ValidTwo';

const arr = Object.entries(country);

const Second = () => {
  const formik = useFormik({
    initialValues: {
      country: '',
      phoneNumber: '',
      languages: [{ language: '', rating: 0 }],
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: ValidTwo,
  });

  return (
    <Container>
      <Page>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            Country of origin
          </InputLabel>
          <Select
            required={true}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Country of origin"
            name="country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
            error={formik.touched.country && Boolean(formik.errors.country)}
            helperText={formik.touched.country && formik.errors.country}
          >
            {arr.map((item, count) => (
              <MenuItem value={item[1].country} key={count}>
                {item[1].country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id="filled-basic"
          label="Phone Number"
          variant="outlined"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
          }
          helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
        />
        <LanguagePicker label1={'Language'} label2={'Fluency'} />
      </Page>
      <button onClick={formik.handleSubmit}>submit</button>
      <BtnGroup prev="/form/first" next={'/form/third'} />
    </Container>
  );
};

export default Second;
