import {
  Stepper as MuiStepper,
  StepperProps as MuiStepperProps
} from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import type { ElementType, ReactElement, ReactNode } from 'react';

export interface StepperProps extends MuiStepperProps {
  /**
   * Set the active step (zero based index). Set to -1 to disable all the steps.
   */
  activeStep?: number;
  /**
   * If set to 'true' and orientation is horizontal, then the step label will be positioned under the icon.
   */
  alternativeLabel?: boolean;
  /**
   * Two or more <Step /> components.
   */
  children?: ReactNode;
  /**
   * 	The component used for the root node. Either a string to use a
   *  HTML element or a component.
   */
  component?: ElementType<any>;
  /**
   * An element to be placed between each step.
   */
  connector?: ReactElement<any, any>;
  /**
   * If set the Stepper will not assist in controlling steps for linear flow.
   */
  nonLinear?: boolean;
  /**
   * The component orientation (layout flow direction).
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles. See the `sx` page for more details.
   */
  sx?: SxProps<Theme>;
}

const Stepper = ({
  activeStep,
  alternativeLabel,
  children,
  connector,
  nonLinear,
  orientation,
  sx,
  ...props
}: StepperProps) => {
  return (
    <MuiStepper
      activeStep={activeStep}
      alternativeLabel={alternativeLabel}
      connector={connector}
      nonLinear={nonLinear}
      orientation={orientation}
      sx={sx}
      {...props}
    >
      {children}
    </MuiStepper>
  );
};

export default Stepper;
