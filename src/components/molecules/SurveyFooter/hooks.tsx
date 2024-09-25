import { useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { SurveyFooterProps } from './SurveyFooter';

interface UseFooterProps {
  /**
   * Total number of steps
   */
  totalSteps: number;
  /**
   * external Current Step
   */
  externalCurrentStep?: number;
  /**
   * external Current Step
   */
  externalSetCurrentStep?: React.Dispatch<React.SetStateAction<number>>;
  /**
   * external handle previous
   */
  externalHandlePrevious?: () => void;
  /**
   * external handle next
   */
  externalHandleNext?: () => void;
  /**
   * external handle circle click
   */
  externalHandleCircleClick?: (index: number) => void;
  /**
   * Slots
   */
  slots?: SurveyFooterProps['slots'];
}
export const useFooter = ({
  totalSteps,
  externalCurrentStep,
  externalSetCurrentStep,
  externalHandlePrevious,
  externalHandleNext,
  externalHandleCircleClick,
  slots
}: UseFooterProps) => {
  const { previousButtonProps, nextButtonProps } = slots || {};
  const theme = useTheme();
  const [internalCurrentStep, internalSetCurrentStep] = useState(1);
  const currentStep = externalCurrentStep ?? internalCurrentStep;
  const setCurrentStep = externalSetCurrentStep ?? internalSetCurrentStep;
  const [lineWidth, setLineWidth] = useState(0);

  useEffect(() => {
    if (totalSteps > 1) {
      const newLineWidth = ((currentStep - 1) / (totalSteps - 1)) * 100;
      setLineWidth(newLineWidth);
    } else {
      setLineWidth(100); // If there's only 1 step, the line should be fully filled
    }
  }, [currentStep, totalSteps]);

  const internalHandlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const internalHandleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
  };

  const internalHandleCircleClick = (index: number) => {
    setCurrentStep(index + 1);
  };
  const handlePrevious = externalHandlePrevious ?? internalHandlePrevious;
  const handleNext = externalHandleNext ?? internalHandleNext;
  const handleCircleClick =
    externalHandleCircleClick ?? internalHandleCircleClick;

  const [adjustedLineWidth, setAdjustedLineWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateLineWidth = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const calculatedWidth = (lineWidth / 100) * containerWidth;
        const adjustedWidth = calculatedWidth;
        setAdjustedLineWidth((adjustedWidth / containerWidth) * 100);
      }
    };

    updateLineWidth();
    window.addEventListener('resize', updateLineWidth);
    return () => window.removeEventListener('resize', updateLineWidth);
  }, [lineWidth]);

  return {
    currentStep,
    containerRef,
    adjustedLineWidth,
    handlePrevious,
    handleNext,
    handleCircleClick,
    theme,
    previousButtonProps,
    nextButtonProps
  };
};
