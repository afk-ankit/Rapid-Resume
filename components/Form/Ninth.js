import { useSelector } from 'react-redux';
import DesignOne from '../Templates/DesignOne';
import Container from '../utils/Container';
import StepCount from '../utils/StepCount';
import BtnGroup from '../utils/BtnGroup';
import DesignTwo from '../Templates/DesignTwo';
import { useState } from 'react';
import styles from '@/styles/Ninth.module.scss';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import DesignThree from '../Templates/DesignThree.js';

const Ninth = () => {
  const templateHandler = (template) => {
    switch (template) {
      case '0':
        return (
          <div className={styles.display}>
            <DesignOne />
          </div>
        );
      case '1':
        return (
          <div className={styles.display}>
            <DesignTwo />
          </div>
        );
      case '2':
        return (
          <div className={styles.display}>
            <DesignThree />
          </div>
        );
      default:
        return (
          <div className={styles.display}>
            <DesignOne />
          </div>
        );
    }
  };

  const userData = useSelector((state) => state.user);
  const [template, setTemplate] = useState('0');
  console.log(userData);
  return (
    <Container>
      <StepCount count={8} />
      <div className={styles.theme}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Choose Template
          </FormLabel>
          <RadioGroup
            defaultValue="0"
            name="radio-buttons-group"
            onChange={(e) => setTemplate(e.target.value)}
          >
            <FormControlLabel
              value="0"
              control={<Radio />}
              label="Template 1"
            />
            <FormControlLabel
              value="1"
              control={<Radio />}
              label="Template 2"
            />
            <FormControlLabel
              value="2"
              control={<Radio />}
              label="Template 3"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div style={{ margin: '2rem 0' }}>{templateHandler(template)}</div>

      <BtnGroup prev={'/form/eighth'} />
    </Container>
  );
};

export default Ninth;
