import { Grid, GridProps, SxProps, Theme } from '@mui/material';
import Button from 'src/components/atoms/Button';
import { ButtonProps } from 'src/components/atoms/Button/Button';
import { XCloseIcon } from 'src/components/particles/theme/overrides/CustomIcons';

export interface CloseButtonProps extends GridProps {
  /**
   * Option to use absolute position
   */
  useAbsolutePosition?: boolean;
  /**
   * close the modal
   */
  onHide?:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
  /**
   * The container styles
   */
  closeGridItemProp?: SxProps<Theme>;
  slots?: {
    buttonProps?: ButtonProps;
  };
  closeIcon?: JSX.Element;
}

export const CloseButton = ({
  useAbsolutePosition,
  closeGridItemProp,
  onHide,
  slots,
  closeIcon = <XCloseIcon />,
  ...props
}: CloseButtonProps) => {
  const { buttonProps } = slots || {};
  return (
    <Grid
      container
      alignItems={'center'}
      justifyContent={useAbsolutePosition ? 'flex-end' : 'flex-start'}
      sx={{
        position: useAbsolutePosition ? 'absolute' : 'relative',
        top: useAbsolutePosition ? 24 : 'unset',
        right: useAbsolutePosition ? 24 : 'unset',
        ...closeGridItemProp
      }}
      {...props}
    >
      <Grid
        item
        sx={{
          display: 'flex',
          alignSelf: 'flex-start'
        }}
      >
        <Button
          endIcon={closeIcon}
          size={'large'}
          color={'secondary'}
          variant={'text'}
          onClick={onHide}
          data-testid="close-button"
          {...buttonProps}
        />
      </Grid>
    </Grid>
  );
};
export default CloseButton;
