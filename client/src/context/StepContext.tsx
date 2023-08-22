import React, { createContext } from 'react';
import { useSteps } from '@chakra-ui/react';
import { ContextProviderProps, StepContextType } from '../type';
import { FormSteps } from '../data';

export const StepContext = createContext<StepContextType | null>(null);

const StepProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: FormSteps.length,
  });
  return (
    <StepContext.Provider
      value={{ activeStep: activeStep, setActiveStep: setActiveStep }}
    >
      {children}
    </StepContext.Provider>
  );
};

export default StepProvider;
