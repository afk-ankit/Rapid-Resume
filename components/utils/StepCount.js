import { MobileStepper, Step, StepLabel, Stepper } from '@mui/material';
import React, { useEffect } from 'react';
import useWindowWidth from './useWindow';

const StepCount = ({ count }) => {
  const steps = [
    { label: 'Name and email' },
    { label: 'Phone number, Country and language' },
    { label: 'Picture Upload' },
    { label: 'Soft Skills and Technical Skills' },
    { label: 'Description about yourself' },
    { label: 'Education' },
    { label: 'Work Experience' },
    { label: 'Hobby' },
    { label: 'Download CV' },
  ];

  const isMobile = useWindowWidth() < 850;
  return isMobile ? (
    <Stepper
      activeStep={(() => {
        if (count >= 1) return 1;
        else return 0;
      })()}
      alternativeLabel
    >
      {count >= 1 && (
        <Step>
          <StepLabel icon={count}>{steps[count - 1].label}</StepLabel>
        </Step>
      )}
      <Step>
        <StepLabel icon={count + 1}>{steps[count].label}</StepLabel>
      </Step>
      {count <= 7 && (
        <Step>
          <StepLabel icon={count + 2}>{steps[count + 1].label}</StepLabel>
        </Step>
      )}
    </Stepper>
  ) : (
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
