import { InputLabel } from '@mui/material';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import Page from '../utils/Page';

const Third = () => {
  return (
    <Container>
      <Page>
        <div className="">
          <InputLabel id="ankit">
            We recommend adding a picture of you for a professional looking CV
          </InputLabel>
          <input type="file" id="ankit" style={{ marginTop: '1rem' }} />
        </div>
      </Page>
      <BtnGroup prev={'/form/second'} next={'/form/fourth'} />
    </Container>
  );
};

export default Third;
