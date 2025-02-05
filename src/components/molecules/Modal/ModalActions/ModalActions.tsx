import {
  Box,
  BoxProps,
  Divider,
  DividerProps,
  SxProps,
  Theme
} from '@mui/material';
import ButtonList from '../../ButtonList';
import { ButtonListButton, ButtonListProps } from '../../ButtonList/ButtonList';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

const buttonListButtons = (
  cancelButtonLabel: string,
  saveButtonLabel: string,
  cancelButtonProps: ButtonListButton,
  saveButtonProps: ButtonListButton
): ButtonListButton[] => {
  return [
    {
      color: 'secondary',
      variant: 'outlined',
      label: cancelButtonLabel ?? 'Cancel',
      fullWidth: true,
      itemprops: { xs: 12, sm: 12, md: 6, order: { xs: 2, sm: 2, md: 1 } },
      ...cancelButtonProps
    },
    {
      color: 'primary',
      variant: 'contained',
      label: saveButtonLabel ?? 'Save',
      fullWidth: true,
      itemprops: { xs: 12, sm: 12, md: 6, order: { xs: 1, sm: 1, md: 1 } },
      ...saveButtonProps
    }
  ];
};

const destructiveButtonListButtons = (
  cancelButtonLabel: string,
  saveButtonLabel: string,
  cancelButtonProps: ButtonListButton,
  saveButtonProps: ButtonListButton
): ButtonListButton[] => {
  return [
    {
      color: 'secondary',
      variant: 'outlined',
      label: cancelButtonLabel ?? 'Cancel',
      fullWidth: true,
      itemprops: { xs: 12, sm: 12, md: 6, order: { xs: 2, sm: 2, md: 1 } },
      ...cancelButtonProps
    },
    {
      color: 'error',
      variant: 'contained',
      label: saveButtonLabel ?? 'Delete',
      fullWidth: true,
      itemprops: { xs: 12, sm: 12, md: 6, order: { xs: 1, sm: 1, md: 2 } },
      ...saveButtonProps
    }
  ];
};

const responsiveTopPadding = responsiveSpacing;
const responsiveTopPaddingWithDivider = responsiveSpacing;
const boxSx: SxProps<Theme> = {
  pb: responsiveSpacing,
  px: responsiveSpacing
};
const dividerSx = responsiveSpacing;
const styles = {
  dividerSx,
  boxSx
};

interface ActionsProps extends Omit<ButtonListProps, 'buttons'> {
  /**
   * The action buttons
   */
  buttons?: ButtonListButton[];
  /**
   * Option to hide the buttons
   */
  hideButtons?: boolean;
  /**
   * Option to show the destructive button
   */
  destructiveButton?: boolean;
  /**
   * the cancel button label
   */
  cancelButtonLabel?: string;
  /**
   * the save button label
   */
  saveButtonLabel?: string;
  /**
   * the cancel button props
   */
  cancelButtonProps?: ButtonListButton;
  /**
   * the save button props
   */
  saveButtonProps?: ButtonListButton;
}
const Actions = ({
  hideButtons,
  destructiveButton,
  cancelButtonLabel,
  saveButtonLabel,
  cancelButtonProps,
  saveButtonProps,
  ...props
}: ActionsProps) => {
  if (hideButtons) return null;
  const finalButtons = destructiveButton
    ? destructiveButtonListButtons(
        cancelButtonLabel!,
        saveButtonLabel!,
        cancelButtonProps!,
        saveButtonProps!
      )
    : buttonListButtons(
        cancelButtonLabel!,
        saveButtonLabel!,
        cancelButtonProps!,
        saveButtonProps!
      );

  return <ButtonList buttons={finalButtons} {...props} />;
};

export interface ModalActionsProps extends BoxProps {
  /**
   * The padding bottom of the container
   */
  paddingTop?: any;
  /**
   * close the modal
   */
  onHideModal?: () => void;
  /**
   * Option to show close button
   */
  showDivider?: boolean;
  slots?: {
    /**
     * The container styles
     */
    dividerProps?: DividerProps;

    /**
     * The action buttons
     */
    actionsProps?: ActionsProps;
    /**
     * The padding top box props
     */
    paddingTopBoxProps?: BoxProps;
    /**
     * the cancel button label
     */
    cancelButtonLabel?: string;
    /**
     * the save button label
     */
    saveButtonLabel?: string;
  };
}
const ModalActions = ({
  showDivider,
  onHideModal,
  paddingTop,
  slots,
  ...props
}: ModalActionsProps) => {
  const {
    dividerProps,
    actionsProps,
    paddingTopBoxProps,
    cancelButtonLabel,
    saveButtonLabel
  } = slots || {};
  const finalTopPadding =
    paddingTop ??
    (showDivider ? responsiveTopPaddingWithDivider : responsiveTopPadding);

  return (
    <>
      {showDivider && (
        <Divider sx={{ pt: styles.dividerSx }} {...dividerProps} />
      )}
      <Box sx={styles.boxSx} {...props}>
        {finalTopPadding && (
          <Box sx={{ pt: finalTopPadding }} {...paddingTopBoxProps} />
        )}
        <Actions
          cancelButtonLabel={cancelButtonLabel}
          saveButtonLabel={saveButtonLabel}
          {...actionsProps}
        />
      </Box>
    </>
  );
};

export default ModalActions;
