import { TypographyProps } from '@mui/material';
import { Grid, Typography, SxProps, Theme } from '@mui/material';
import AvatarAndText from '../AvatarAndText';
import { AvatarAndTextProps } from '../AvatarAndText/AvatarAndText';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';

export interface ItemWithContentProps {
  /**
   * Item with content styles
   */
  sx?: SxProps<Theme>;
  /**
   * Item with content price typography
   */
  priceTypographyProps: TypographyProps;
  /**
   * Item with content avatar and text
   */
  avatarAndTextProps: AvatarAndTextProps;
  /**
   * Item with with content button
   */
  itemButtonProps?: ButtonProps;
}

/**
 * Primary UI component for user interaction
 */
const ItemWithContent = ({
  avatarAndTextProps,
  priceTypographyProps,
  itemButtonProps,
  sx,
  ...props
}: ItemWithContentProps) => {
  return (
    <Grid container flexWrap={'nowrap'} sx={sx} {...props}>
      <Grid item flexGrow={1} sx={{ my: 'auto' }}>
        <AvatarAndText
          sx={{ my: 'auto', flexWrap: 'nowrap' }}
          {...avatarAndTextProps}
        />
      </Grid>
      <Grid item sx={{ mt: 'auto' }}>
        <Grid container flexDirection={'column'}>
          <Grid item>
            <Typography variant={'textLgSemibold'} {...priceTypographyProps} />
          </Grid>
          {itemButtonProps && (
            <Grid item sx={{ width: '100%', textAlign: 'end' }}>
              <Button {...itemButtonProps}></Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemWithContent;
