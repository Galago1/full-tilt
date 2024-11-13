import type { SxProps, Theme } from '@mui/material';
import {
  ButtonGroup as MuiButtonGroup,
  ButtonGroupProps as MuiButtonGroupProps
} from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import type { ButtonProps } from 'src/components/atoms/Button/Button';
import Button from 'src/components/atoms/Button/Button';
import Tooltip from 'src/components/atoms/Tooltip/Tooltip';

export interface ButtonGroupProps extends Omit<MuiButtonGroupProps, 'onClick'> {
  buttons: (ButtonProps & {
    selected?: boolean;
    tooltip?: string;
  })[];
  sx?: SxProps;
  disabled?: boolean;
  onClick?: (index: number) => void;
  customVariant?: 'default' | 'roundedEdges';
  useSelectedStyles?: boolean;
}

const StyledButton = styled(Button)<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    minWidth: 50,
    backgroundColor: selected ? 'grey.100' : undefined
  })
);

const ButtonGroup = ({
  buttons,
  sx,
  disabled,
  customVariant = 'default',
  onClick,
  useSelectedStyles = true,
  ...props
}: ButtonGroupProps) => {
  const theme = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(
    buttons.findIndex((button) => button.selected) ?? 0
  );

  const handleButtonClick = (
    index: number,
    buttonOnClick?: (a: any, b: any) => void
  ) => {
    setSelectedIndex(index);
    if (onClick) onClick(index);
    buttonOnClick ? buttonOnClick(undefined, undefined) : () => {};
  };

  return (
    <MuiButtonGroup sx={sx} disabled={disabled} {...props}>
      {buttons.map((button, index) => {
        const selectedStyles = useSelectedStyles
          ? {
              backgroundColor: selectedIndex === index ? 'grey.50' : undefined,
              color: selectedIndex === index ? 'grey.800' : undefined
            }
          : {};

        const buttonSx = {
          ...(customVariant === 'roundedEdges' && {
            ...selectedStyles
          }),
          ...button.sx
        };

        const ButtonComponent = (
          <StyledButton
            key={index}
            {...button}
            onClick={() => handleButtonClick(index, button.onClick)}
            sx={buttonSx}
          />
        );

        return button.tooltip ? (
          <Tooltip key={index} title={button.tooltip}>
            {ButtonComponent}
          </Tooltip>
        ) : (
          ButtonComponent
        );
      })}
    </MuiButtonGroup>
  );
};

export default ButtonGroup;
