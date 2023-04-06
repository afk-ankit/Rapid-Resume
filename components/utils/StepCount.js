import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

const StepCount = ({ count }) => {
  return (
    <Stepper activeStep={count} alternativeLabel>
      <Step>
        <StepLabel>Name and email</StepLabel>
      </Step>
      <Step>
        <StepLabel>Phone number, Country and language</StepLabel>
      </Step>
      <Step>
        <StepLabel>Picture Upload</StepLabel>
      </Step>
      <Step>
        <StepLabel>Soft Skills and Technical Skills</StepLabel>
      </Step>
      <Step>
        <StepLabel>Description about yourself</StepLabel>
      </Step>
      <Step>
        <StepLabel>Education</StepLabel>
      </Step>
      <Step>
        <StepLabel>Work Experience</StepLabel>
      </Step>
      <Step>
        <StepLabel>Hobby</StepLabel>
      </Step>
      <Step>
        <StepLabel>Download CV</StepLabel>
      </Step>
    </Stepper>
  );
};

export default StepCount;
