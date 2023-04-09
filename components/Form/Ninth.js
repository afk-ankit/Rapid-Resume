import { useSelector } from 'react-redux';
import DesignOne from '../Templates/DesignOne';
import Container from '../utils/Container';
import StepCount from '../utils/StepCount';
import BtnGroup from '../utils/BtnGroup';
import DesignTwo from '../Templates/DesignTwo';
import { useState } from 'react';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

const Ninth = () => {
  const userData = useSelector((state) => state.user);
  const [template, setTemplate] = useState(0);
  console.log(userData);
  return (
    <Container>
      <StepCount count={8} />
      <div style={{ marginTop: '2rem' }}>
        {template == 0 ? <DesignOne /> : <DesignTwo />}
      </div>
      <div style={{ position: 'absolute', top: '30rem', left: '8rem' }}>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">
            Choose Template
          </FormLabel>
          <RadioGroup
            defaultValue="Template 1"
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
          </RadioGroup>
        </FormControl>
      </div>

      <BtnGroup prev={'/form/eighth'} />
    </Container>
  );
};

export default Ninth;
