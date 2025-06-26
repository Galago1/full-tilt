import type { GridProps, SxProps } from '@mui/material';
import { Grid } from '@mui/material';
import { forwardRef } from 'react';
import type { ButtonProps } from 'src/components/atoms/Button/Button';
import Button from 'src/components/atoms/Button/Button';
import Tooltip, { TooltipProps } from 'src/components/atoms/Tooltip/Tooltip';

interface ContentProps {
  tooltipProps?: TooltipProps;
  buttonProps?: ButtonProps;
}
const Content = ({ tooltipProps, buttonProps }: ContentProps) => {
  if (tooltipProps)
    return (
      <Tooltip {...tooltipProps}>
        <Button {...buttonProps} />
      </Tooltip>
    );
  return <Button {...buttonProps} />;
};

export type ButtonListButton = ButtonProps & {
  itemprops?: GridProps;
  tooltipProps?: TooltipProps;
};

export interface ButtonListProps extends GridProps {
  /**
   * List of buttons
   */
  buttons: ButtonListButton[];
  /**
   * grid spacing
   */
  buttonSpacing?: number;
  /**
   * Css style overrides
   */
  sx?: SxProps;
  /**
   * Css style overrides
   */
  itemSx?: SxProps;
  /**
   * Tooltip props
   */
  tooltipProps?: TooltipProps;
}

/**
 * Primary UI component for user interaction
 */
const ButtonList = forwardRef<HTMLDivElement, ButtonListProps>(
  (
    {
      buttons,
      tooltipProps,
      sx,
      buttonSpacing = 1.5,
      itemSx,
      ...props
    }: ButtonListProps,
    ref
  ) => {
    return (
      <Grid
        container
        sx={sx}
        {...props}
        spacing={buttonSpacing}
        alignItems="center"
        ref={ref}
      >
        {buttons.map((button: ButtonListButton, index: number) => {
          const {
            itemprops,
            tooltipProps: buttonTooltipProps,
            ...buttonProps
          } = button;
          return (
            <Grid
              item
              key={`button-list-index[${index}]`}
              sx={{ ...itemSx, alignSelf: 'center' }}
              {...itemprops}
            >
              <Content
                buttonProps={buttonProps}
                tooltipProps={buttonTooltipProps || tooltipProps}
              />
            </Grid>
          );
        })}
      </Grid>
    );
  }
);
ButtonList.displayName = 'ButtonList';
export default ButtonList;
