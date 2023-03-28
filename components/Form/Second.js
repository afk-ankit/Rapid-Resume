import styles from '@/styles/Second.module.scss';
import BtnGroup from '../utils/BtnGroup';
import Container from '../utils/Container';
import Page from '../utils/Page';

const Second = () => {
  return (
    <Container>
      <Page></Page>
      <BtnGroup prev="/form/first" next={'/form/third'} />
    </Container>
  );
};

export default Second;
