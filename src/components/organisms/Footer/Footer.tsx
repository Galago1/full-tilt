import {
  AppBar,
  AppBarProps,
  Container,
  Grid,
  SxProps,
  Theme,
  Toolbar
} from '@mui/material';
import Button, { ButtonProps } from 'src/components/atoms/Button/Button';
import { AvatarAndText } from 'src/components/molecules';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import type { ButtonListProps } from 'src/components/molecules/ButtonList/ButtonList';
import ButtonList from 'src/components/molecules/ButtonList/ButtonList';

export interface FooterProps extends AppBarProps {
  /**
   * The ButtonList props
   */
  buttonListProps?: ButtonListProps;
  /**
   * Use large class
   */
  largeToolbar?: boolean;
  /**
   * Toolbar styles
   */
  toolbarSx?: SxProps<Theme>;
  /**
   * button props
   */
  buttonProps?: ButtonProps;
  /**
   * avatar and text props
   */
  avatarAndTextProps?: AvatarAndTextProps;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
const Footer = ({
  color = 'inherit',
  buttonListProps,
  largeToolbar,
  toolbarSx,
  buttonProps,
  avatarAndTextProps,
  ...props
}: FooterProps) => {
  return (
    <AppBar color={color} {...props}>
      <Container maxWidth="xl">
        <Toolbar
          className={`${largeToolbar && 'large-toolbar'}`}
          sx={toolbarSx}
        >
          <Grid container alignItems="center">
            <Grid item flexGrow={1}>
              <Grid container spacing={2} flexWrap={'nowrap'}>
                {buttonProps && (
                  <Grid item>
                    <Button {...buttonProps} />
                  </Grid>
                )}
                {avatarAndTextProps && (
                  <Grid item display={'flex'}>
                    <AvatarAndText {...avatarAndTextProps} />
                  </Grid>
                )}
              </Grid>
            </Grid>
            {buttonListProps && (
              <Grid item>
                <ButtonList {...buttonListProps} />
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Footer;
