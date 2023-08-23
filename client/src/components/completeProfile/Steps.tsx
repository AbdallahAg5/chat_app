import {
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  Box,
} from '@chakra-ui/react';
import { useContext } from 'react';
import { StepContext } from '../../context/StepContext';
import { FormSteps } from '../../data';

function StepForm() {
  const ActiveStep = useContext(StepContext)?.activeStep;

  return (
    <Stepper
      size={['xs', 'sm']}
      colorScheme="red"
      index={ActiveStep || 0}
      w={'full'}
    >
      {FormSteps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepIcon />}
              incomplete={<StepNumber />}
              active={<StepNumber />}
            />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
}

export default StepForm;
