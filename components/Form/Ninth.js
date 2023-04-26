import { useSelector } from 'react-redux';
import DesignOne from '../Templates/DesignOne';
import Container from '../utils/Container';
import StepCount from '../utils/StepCount';
import BtnGroup from '../utils/BtnGroup';
import DesignTwo from '../Templates/DesignTwo';
import { useState } from 'react';
import styles from '@/styles/Ninth.module.scss';
import { useRouter } from 'next/router';
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import DesignThree from '../Templates/DesignThree.js';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import ReactToPrint from 'react-to-print';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Link from 'next/link';

const Ninth = () => {
  const router = useRouter();
  const prevHandler = () => {
    router.push('/form/eighth');
  };
  const [template, setTemplate] = useState('0');
  const [color, setColor] = useState('0');
  const [componentRef, handleRef] = useState([null, null, null]);
  const templateHandler = (template) => {
    switch (template) {
      case '0':
        return (
          <div className={styles.display}>
            <DesignOne handleRef={handleRef} theme={color} />
          </div>
        );
      case '1':
        return (
          <div className={styles.display}>
            <DesignTwo handleRef={handleRef} theme={color} />
          </div>
        );
      case '2':
        return (
          <div className={styles.display}>
            <DesignThree handleRef={handleRef} theme={color} />
          </div>
        );
      default:
        return (
          <div className={styles.display}>
            <DesignOne handleRef={handleRef} theme={color} />
          </div>
        );
    }
  };
  const btnStyle = (isValid) => {
    if (!isValid) {
      return {
        background: '#808080',
        color: 'white',
      };
    } else {
      return {
        background: '#FF9300',
        color: 'white',
      };
    }
  };

  return (
    <Container>
      <StepCount count={8} />
      <div className={styles.theme}>
        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Choose Template
            </FormLabel>
            <RadioGroup
              defaultValue="0"
              name="radio-buttons-group"
              onChange={(e) => setTemplate(e.target.value)}
            >
              <FormControlLabel value="0" control={<Radio />} label="Modern" />
              <FormControlLabel
                value="1"
                control={<Radio />}
                label="Creative"
              />
              <FormControlLabel value="2" control={<Radio />} label="Advance" />
            </RadioGroup>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Choose Color
            </FormLabel>
            <RadioGroup
              defaultValue="0"
              name="radio-buttons-group"
              onChange={(e) => setColor(e.target.value)}
            >
              <FormControlLabel value="0" control={<Radio />} label="Default" />
              <FormControlLabel value="1" control={<Radio />} label="Pink" />
              <FormControlLabel value="2" control={<Radio />} label="Orange" />
            </RadioGroup>
          </FormControl>
        </div>
      </div>

      <div
        style={{
          margin: '2rem auto',
          // width: '792px',
        }}
      >
        {templateHandler(template)}
      </div>
      <div className={styles.btnGroup}>
        <Button
          startIcon={<KeyboardArrowLeftIcon />}
          style={btnStyle(false)}
          onClick={prevHandler}
        >
          Tilbage
        </Button>
        <ReactToPrint
          trigger={() => (
            <div>
              <Button variant="contained" endIcon={<LocalPrintshopIcon />}>
                Download CV
              </Button>
            </div>
          )}
          content={() => componentRef[template].current}
        />
        <Link
          href={'https://danskudlandsrekruttering.dk/jobs-i-udlandet/'}
          target="_blank"
        >
          <Button variant="contained">See open jobs</Button>
        </Link>
      </div>
    </Container>
  );
};

export default Ninth;
