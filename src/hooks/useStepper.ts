import { useState } from 'react';

const useStepper = (defaultOptionalSteps: number[] = [], initialStep = 0) => {
  const [activeStep, setActiveStep] = useState(initialStep);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [optionalSteps, setOptionalSteps] = useState(
    new Set<number>(defaultOptionalSteps)
  );

  const isStepOptional = (step: number) => {
    return optionalSteps.has(step);
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setOptionalSteps(new Set<number>(defaultOptionalSteps));
  };

  const displaySkip = (step: number) => {
    return step === 1;
  };

  return {
    activeStep,
    isStepOptional,
    isStepSkipped,
    handleReset,
    handleBack,
    handleSkip,
    handleNext,
    displaySkip
  };
};

export default useStepper;
