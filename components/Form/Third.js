import { InputLabel } from '@mui/material';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import Page from '../utils/Page';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { populate } from '@/store/slice/userSlice';

const Third = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const dispatch = useDispatch();
  selectedFile &&
    dispatch(populate({ url: URL.createObjectURL(selectedFile) }));
  return (
    <Container>
      <Page>
        <div className="">
          <InputLabel id="ankit">
            We recommend adding a picture of you for a professional looking CV
          </InputLabel>
          <input
            type="file"
            id="ankit"
            style={{ marginTop: '1rem' }}
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
        </div>
      </Page>
      <BtnGroup
        prev={'/form/second'}
        next={'/form/fourth'}
        isValid={true}
        onSubmit={() => {}}
      />
    </Container>
  );
};

export default Third;
