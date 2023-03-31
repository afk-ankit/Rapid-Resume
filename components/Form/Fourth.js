import Page from '../utils/Page';
import Container from '@/components/utils/Container';
import softSkill from '@/public/softSkill.json';
import { Button } from '@mui/material';
import LanguagePicker from './Second/LanguagePicker';
import BtnGroup from '../utils/BtnGroup';

const Fourth = () => {
  return (
    <Container>
      <Page>
        <LanguagePicker label1={'Soft-Skills'} label2={'Skill'} />
        <LanguagePicker label1={'Technical-Skills'} label2={'Skill'} />
      </Page>
      <BtnGroup prev={'/form/third'} next={'/form/fifth'} />
    </Container>
  );
};

export default Fourth;
