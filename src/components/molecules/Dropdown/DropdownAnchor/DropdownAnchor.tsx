import { Box, IconButton } from '@mui/material';
import type { IconButtonProps } from '@mui/material/IconButton';
import { forwardRef } from 'react';
import type { ButtonProps } from 'src/components/atoms/Button/Button';
import Button from 'src/components/atoms/Button/Button';

export interface DropdownAnchorProps {
  /**
   * The button props
   */
  buttonProps?: ButtonProps;
  /**
   * The icon button props
   */
  iconButtonProps?: IconButtonProps;
  /**
   * The name, icon, or avatar
   */
  label: JSX.Element | string;
  /**
   * The open status
   */
  isOpen?: boolean;
  /**
   * The on click action
   */
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const DropdownAnchor = forwardRef(
  (
    {
      label,
      isOpen,
      onClick,
      buttonProps,
      iconButtonProps
    }: DropdownAnchorProps,
    ref: any
  ) => {
    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center'
        }}
        ref={ref}
      >
        {buttonProps ? (
          <Button
            {...buttonProps}
            sx={{
              ...buttonProps.sx,
              '& .MuiButton-endIcon': {
                transform: isOpen ? 'rotate(180deg)' : 'none'
              }
            }}
            onClick={onClick}
            aria-controls={isOpen ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : undefined}
            label={label as string}
          />
        ) : (
          <IconButton
            {...iconButtonProps}
            onClick={onClick}
            aria-controls={isOpen ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={isOpen ? 'true' : undefined}
          >
            {label}
          </IconButton>
        )}
      </Box>
    );
  }
);