import React from 'react';
import Container from '../utils/Container';
import Page from '../utils/Page';
import styles from '@/styles/Fifth.module.scss';
import BtnGroup from '../utils/BtnGroup';

const Fifth = () => {
  return (
    <Container>
      <Page>
        <div className={styles.type}>
          <h3>Describe yourself in a few sentences</h3>
          <textarea
            name="text"
            id=""
            placeholder={`Tell us who you are, what motivates you or highlight some professional results from previous jobs. Example: ”Motivated jobseeker with 2 years of experience within Customer Service. I am driven by helping people and giving the best service to customers.”`}
          ></textarea>
        </div>
      </Page>
      <BtnGroup prev={'/form/fourth'} next={'/form/sixth'} />
    </Container>
  );
};

export default Fifth;
