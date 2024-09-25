import { Grid, GridProps } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import { TickIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import Button from '../../atoms/Button';
import {
  FooterContainer,
  FooterInnerCircle,
  FooterProgressCircle,
  FooterProgressContainer,
  FooterProgressLine
} from './helpers';
import { useFooter } from './hooks';

export interface SurveyFooterProps extends GridProps {
  /**
   * Total number of steps
   */
  totalSteps?: number;
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
  slots?: {
    previousButtonProps: ButtonProps;
    nextButtonProps: ButtonProps;
  };
}

const SurveyFooter = ({
  totalSteps = 5,
  externalCurrentStep,
  externalSetCurrentStep,
  externalHandlePrevious,
  externalHandleNext,
  externalHandleCircleClick,
  slots,
  ...props
}: SurveyFooterProps) => {
  const {
    currentStep,
    containerRef,
    adjustedLineWidth,
    handlePrevious,
    handleNext,
    handleCircleClick,
    theme,
    previousButtonProps,
    nextButtonProps
  } = useFooter({
    totalSteps,
    externalCurrentStep,
    externalSetCurrentStep,
    externalHandlePrevious,
    externalHandleNext,
    externalHandleCircleClick,
    slots
  });

  return (
    <FooterContainer {...props}>
      {currentStep > 1 ? (
        <Button
          type={'button'}
          label={'Previous'}
          variant="outlined"
          onClick={handlePrevious}
          disabled={currentStep === 1}
          {...previousButtonProps}
        />
      ) : (
        <Grid width={92} />
      )}
      <FooterProgressContainer ref={containerRef}>
        <FooterProgressLine width={adjustedLineWidth} />
        {Array.from({ length: totalSteps }).map((_, index) => (
          <Fragment key={index}>
            <FooterProgressCircle
              theme={theme}
              active={index < currentStep}
              onClick={() => handleCircleClick(index)}
            >
              {index < currentStep - 1 && (
                <TickIcon
                  sx={{
                    color: 'white',
                    width: theme.spacing(1.5),
                    height: theme.spacing(1.5)
                  }}
                />
              )}
              {index === currentStep - 1 && <FooterInnerCircle theme={theme} />}
            </FooterProgressCircle>
            {index < totalSteps - 1 && <Grid style={{ flexGrow: 1 }} />}
          </Fragment>
        ))}
      </FooterProgressContainer>
      <Button
        type={'button'}
        label={'Next'}
        variant="contained"
        onClick={handleNext}
        disabled={currentStep === totalSteps}
        {...nextButtonProps}
      />
    </FooterContainer>
  );
};

export default SurveyFooter;
