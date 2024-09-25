import {
  Box,
  BoxProps,
  Divider,
  DividerProps,
  Grid,
  SxProps,
  Theme
} from '@mui/material';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';
import ButtonList, { ButtonListProps } from '../../ButtonList/ButtonList';
import ButtonGroup, { ButtonGroupProps } from '../../ButtonGroup/ButtonGroup';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';

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

export interface SectionFooterProps extends BoxProps {
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
     * The padding top box props
     */
    paddingTopBoxProps?: BoxProps;
    /**
     * The left button
     */
    leftButtonProps?: ButtonProps;
    /**
     * The left button group props
     */
    leftButtonGroupProps?: ButtonGroupProps;
    /**
     * The right button list props
     */
    rightButtonsProps?: ButtonListProps;
  };
}
const SectionFooter = ({
  paddingTop,
  showDivider,
  onHideCard,
  slots,
  ...props
}: SectionFooterProps) => {
  const {
    dividerProps,
    leftButtonProps,
    leftButtonGroupProps,
    rightButtonsProps,
    paddingTopBoxProps
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
        <Grid container>
          <Grid item xs={6}>
            <Grid container spacing={2} alignItems={'center'}>
              {leftButtonGroupProps && (
                <Grid item>
                  <ButtonGroup {...leftButtonGroupProps!} />
                </Grid>
              )}
              <Grid item>
                <Button {...leftButtonProps!} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <ButtonList {...rightButtonsProps!} />
          </Grid>
        </Grid>
        {/* <Actions {...actionsProps} /> */}
      </Box>
      {showDivider && (
        <Divider sx={{ pt: styles.dividerSx }} {...dividerProps} />
      )}
    </>
  );
};

export default SectionFooter;
