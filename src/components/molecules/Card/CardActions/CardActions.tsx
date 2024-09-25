import {
  Box,
  BoxProps,
  Divider,
  DividerProps,
  SxProps,
  Theme
} from '@mui/material';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import ButtonList from '../../ButtonList';
import { ButtonListButton, ButtonListProps } from '../../ButtonList/ButtonList';

const buttonListButtons: ButtonListButton[] = [
  {
    color: 'secondary',
    variant: 'outlined',
    label: 'Cancel',
    fullWidth: true,
    itemprops: { xs: 12, sm: 12, md: 6, order: { xs: 2, sm: 2, md: 1 } }
  },
  {
    color: 'primary',
    variant: 'contained',
    label: 'Save',
    fullWidth: true,
    itemprops: { xs: 12, sm: 12, md: 6, order: { xs: 1, sm: 1, md: 1 } }
  }
];

const destructuctiveButtonListButtons: ButtonListButton[] = [
  {
    color: 'secondary',
    variant: 'outlined',
    label: 'Cancel',
    fullWidth: true,
    itemprops: { xs: 12, sm: 12, md: 6, order: { xs: 2, sm: 2, md: 1 } }
  },
  {
    color: 'error',
    variant: 'contained',
    label: 'Delete',
    fullWidth: true,
    itemprops: { xs: 12, sm: 12, md: 6, order: { xs: 1, sm: 1, md: 2 } }
  }
];

interface ActionsProps extends Omit<ButtonListProps, 'buttons'> {
  buttons?: ButtonListButton[];
  hideButtons?: boolean;
  destructiveButton?: boolean;
}
const Actions = ({
  hideButtons,
  destructiveButton,
  ...props
}: ActionsProps) => {
  if (hideButtons) return null;
  const finalButtons = destructiveButton
    ? destructuctiveButtonListButtons
    : buttonListButtons;

  return <ButtonList buttons={finalButtons} {...props} />;
};

const responsiveTopPadding = { xs: 3, sm: 3, md: 4 };
const responsiveTopPaddingWithDivider = responsiveSpacing;

const boxSx: SxProps<Theme> = {
  // pt: responsiveSpacing,
  pb: responsiveSpacing,
  px: responsiveSpacing
};
const dividerSx = responsiveSpacing;
const styles = {
  dividerSx,
  boxSx
};

export interface CardActionsProps extends BoxProps {
  /**
   * The padding bottom of the container
   */
  paddingTop?: any;
  /**
   * close the Card
   */
  onHideCard?: () => void;
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
  };
}
const CardActions = ({
  paddingTop,
  showDivider,
  onHideCard,
  slots,
  ...props
}: CardActionsProps) => {
  const { dividerProps, actionsProps, paddingTopBoxProps } = slots || {};
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
        <Actions {...actionsProps} />
      </Box>
    </>
  );
};

export default CardActions;
