import styles from '@/styles/Second.module.scss';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import Page from '../utils/Page';
import country from '@/public/countryNames.json';
import { InputLabel, MenuItem, Select, TextField } from '@mui/material';
import LanguagePicker from './Second/LanguagePicker';
const arr = Object.entries(country);

const Second = () => {
  return (
    <Container>
      <Page>
        <InputLabel id="demo-simple-select-label">Country of origin</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Country of origin"
          style={{ background: '#E2F2FF' }}
        >
          {arr.map((item, count) => (
            <MenuItem value={item[1].country} key={count}>
              {item[1].country}
            </MenuItem>
          ))}
        </Select>
        <TextField
          id="filled-basic"
          label="Phone Number"
          variant="outlined"
          style={{ width: '100%', background: '#E2F2FF' }}
        />
        <LanguagePicker />
      </Page>
      <BtnGroup prev="/form/first" next={'/form/third'} />
    </Container>
  );
};

export default Second;
