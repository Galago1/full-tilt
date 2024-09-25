import {
  AppBarProps,
  AvatarGroup,
  AvatarGroupProps,
  ContainerProps,
  GridProps,
  SxProps,
  Theme,
  ToolbarProps,
  Typography,
  TypographyProps
} from '@mui/material';
import { AppBar, Container, Grid, Toolbar } from '@mui/material';
import Divider from 'src/components/atoms/Divider/Divider';
import AvatarAndText from 'src/components/molecules/AvatarAndText';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import type { ButtonListProps } from 'src/components/molecules/ButtonList/ButtonList';
import ButtonList from 'src/components/molecules/ButtonList/ButtonList';
import type { DropdownProps } from 'src/components/molecules/Dropdown/Dropdown';
import Dropdown from 'src/components/molecules/Dropdown/Dropdown';

export interface TopNavProps extends AppBarProps {
  /**
   * The logo svg
   */
  logo?: JSX.Element;
  /**
   * The ButtonList props
   */
  buttonListProps?: ButtonListProps;

  /**
   * The Dropdown props
   */
  dropdownProps?: DropdownProps;
  /**
   * The Dropdown props
   */
  leftDropdownProps?: DropdownProps[];
  /**
   * Use large class
   */
  largeToolbar?: boolean;
  /**
   * show the divider
   * @default
   * false
   */
  showDivider?: boolean;
  /**
   * Toolbar styles
   */
  toolbarSx?: SxProps<Theme>;
  /**
   * Logo grid item styles
   */
  logoGridItemSx?: SxProps<Theme>;
  /**
   * Handle logo click
   */
  onLogoClick?: () => void;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Avatar and text props
   */
  avatarAndTextProps?: AvatarAndTextProps;
  /**
   * Toolbar props
   */
  toolbarProps?: ToolbarProps;
  /**
   * Grid container props
   */
  gridContainerProps?: GridProps;
  /**
   * Hidden initial item props
   */
  hiddenInitialItemProps?: GridProps;
  /**
   * Initial item props
   */
  initialItemProps?: GridProps;
  /**
   * Last item props
   */
  lastItemProps?: GridProps;
  /**
   * Hidden initial avatar and text props
   */
  hiddenInitialAvatarTextProps?: AvatarAndTextProps;
  /**
   * Container props
   */
  containerProps?: ContainerProps;
  /**
   * Logo props
   */
  logoProps?: TypographyProps;
  /**
   * Avatar group props
   */
  avatarGroupProps?: AvatarGroupProps;
  /**
   * any component placed before the dropdown list
   */
  anyComp?: any;
  /**
   * any component grid item props
   */
  anyCompItemProps?: GridProps;
  /**
   * last item container props
   */
  lastItemContainerProps?: GridProps;
  /**
   * any component placed before the first any component
   */
  anyCompStart?: JSX.Element;
}

/**
 * Primary UI component for user interaction
 */
const TopNav = ({
  logo,
  color = 'inherit',
  showDivider = false,
  buttonListProps,
  dropdownProps,
  leftDropdownProps,
  largeToolbar,
  toolbarSx,
  logoGridItemSx,
  gridContainerProps,
  avatarAndTextProps,
  toolbarProps,
  hiddenInitialItemProps,
  initialItemProps,
  lastItemProps,
  hiddenInitialAvatarTextProps,
  onLogoClick,
  containerProps = { maxWidth: 'xl' },
  logoProps,
  avatarGroupProps,
  anyComp,
  anyCompItemProps,
  lastItemContainerProps,
  anyCompStart,
  ...props
}: TopNavProps) => {
  return (
    <AppBar color={color} {...props}>
      <Container {...containerProps}>
        <Toolbar
          className={`${largeToolbar && 'large-toolbar'}`}
          sx={toolbarSx}
          {...toolbarProps}
        >
          <Grid container alignItems="center" {...gridContainerProps}>
            {hiddenInitialItemProps && (
              <Grid item {...hiddenInitialItemProps}>
                <AvatarAndText {...hiddenInitialAvatarTextProps} />
              </Grid>
            )}
            {(logo || avatarAndTextProps) && (
              <Grid item flexGrow={1} sx={logoGridItemSx} {...initialItemProps}>
                {logo && (
                  <Typography
                    component={'span'}
                    onClick={onLogoClick}
                    sx={{ '&:hover': { cursor: 'pointer' } }}
                    {...logoProps}
                  >
                    {logo}
                  </Typography>
                )}
                {avatarAndTextProps && (
                  <AvatarAndText {...avatarAndTextProps} />
                )}
              </Grid>
            )}
            {(buttonListProps ||
              dropdownProps ||
              leftDropdownProps ||
              anyComp) && (
              <Grid item {...lastItemProps}>
                <Grid
                  container
                  spacing={2}
                  alignItems="center"
                  {...lastItemContainerProps}
                >
                  {anyCompStart}
                  {anyComp && (
                    <Grid item {...anyCompItemProps}>
                      {anyComp}
                    </Grid>
                  )}
                  {/* TODO: figure out how to update the order 
                  instead of duplicating the dropdown */}
                  {leftDropdownProps &&
                    leftDropdownProps.map((dropdownProps, index) => (
                      <Grid item key={`left-dropdown-props-list-${index}`}>
                        <Dropdown {...dropdownProps} />
                      </Grid>
                    ))}
                  {avatarGroupProps && (
                    <Grid item>
                      <AvatarGroup {...avatarGroupProps} />
                    </Grid>
                  )}
                  {buttonListProps && (
                    <Grid item>
                      <ButtonList {...buttonListProps} />
                    </Grid>
                  )}
                  {dropdownProps && (
                    <Grid item>
                      <Dropdown {...dropdownProps} />
                    </Grid>
                  )}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </Container>
      {showDivider && <Divider />}
    </AppBar>
  );
};
export default TopNav;
