import styles from '@/styles/First.module.scss';
import { TextField } from '@mui/material';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import Page from '../utils/Page';

const First = () => {
  return (
    <Container>
      <Page>
        <TextField
          id="filled-basic"
          label="First Name"
          variant="outlined"
          style={{ width: '100%', background: '#E2F2FF' }}
        />
        <TextField
          id="filled-basic"
          label="Last Name"
          variant="outlined"
          style={{ width: '100%', background: '#E2F2FF' }}
        />
        <TextField
          id="filled-basic"
          label="Email"
          variant="outlined"
          style={{ width: '100%', background: '#E2F2FF' }}
        />
      </Page>
      <BtnGroup prev="/" next="/form/second" />
    </Container>
  );
};

export default First;
