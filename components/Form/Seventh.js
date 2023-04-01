import React from 'react';
import Container from '../utils/Container';
import Page from '../utils/Page';
import BtnGroup from '../utils/BtnGroup';

const Seventh = () => {
  return (
    <Container>
      <Page></Page>
      <BtnGroup prev={'/form/sixth'} next={'/form/eighth'} />
    </Container>
  );
};

export default Seventh;
