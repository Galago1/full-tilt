import { ReactElement } from 'react';
import Tooltip, { TooltipProps } from 'src/components/atoms/Tooltip/Tooltip';

export interface IconWithTooltipProps {
  /**
   * tooltip props
   */
  tooltipProps: TooltipProps;
  /**
   * Children
   */
  children: ReactElement<any, any> | undefined;
}

/**
 * Primary UI component for user interaction
 */
const IconWithTooltip = ({
  tooltipProps,
  children,
  ...props
}: IconWithTooltipProps) => {
  return (
    <Tooltip {...props} {...tooltipProps}>
      {children}
    </Tooltip>
  );
};

export default IconWithTooltip;
