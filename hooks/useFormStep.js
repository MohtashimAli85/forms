import { useState, useCallback } from 'react';

// useFormStep Hook
const useFormStep = (initialStep = 0) => {
  const [currentStep, setCurrentStep] = useState(initialStep);

  // Proceed to the next step
  const nextStep = useCallback(() => {
    setCurrentStep((prevStep) => prevStep + 1);
  }, []);

  // Go back to the previous step
  const prevStep = useCallback(() => {
    setCurrentStep((prevStep) => (prevStep > 0 ? prevStep - 1 : 0));
  }, []);

  // Jump to a specific step
  const goToStep = useCallback((step) => {
    setCurrentStep(step);
  }, []);

  return { currentStep, nextStep, prevStep, goToStep };
};

export default useFormStep;
