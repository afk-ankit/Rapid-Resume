import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import Page from '../utils/Page';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import EducationInput from './Sixth/EducationInput';
import Test from '../Test';

const Sixth = () => {
  const [arr, setArr] = useState([]);
  const addHandlder = () => {
    setArr([...arr, '']);
  };
  return (
    <Container>
      <Page>
        <EducationInput variant={'first'} setArr={setArr} />
        <hr />
        <Button variant="contained" fullWidth onClick={addHandlder}>
          Add Education
        </Button>
        {arr.map((item) => (
          <EducationInput setArr={setArr} />
        ))}
      </Page>
      <Test />
      <BtnGroup prev={'/form/fifth'} next={'/form/seventh'} />
    </Container>
  );
};

export default Sixth;
