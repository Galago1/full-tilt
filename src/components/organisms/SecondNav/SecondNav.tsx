import {
  AppBar,
  AppBarProps,
  Container,
  ContainerProps,
  Grid,
  GridProps,
  Toolbar,
  ToolbarProps
} from '@mui/material';
import { useTheme } from '@mui/material';
import { isEmpty } from 'lodash';
import { AvatarAndText } from 'src/components/molecules';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import Breadcrumbs, {
  BreadcrumbsProps
} from 'src/components/molecules/Breadcrumbs/Breadcrumbs';
import type { ButtonListProps } from 'src/components/molecules/ButtonList/ButtonList';
import ButtonList from 'src/components/molecules/ButtonList/ButtonList';

interface SlotProps {
  /**
   * The ButtonList props
   */
  buttonListProps: ButtonListProps;
  /**
   * Optional click handler
   */
  avatarAndTextProps?: AvatarAndTextProps;
  /**
   * The props for the Toolbar component
   */
  toolbarProps?: ToolbarProps;
  /**
   * The props for the Container component
   */
  containerProps?: ContainerProps;
  /**
   * The props for the AppBar component
   */
  appBarProps?: AppBarProps;
  /**
   * grid container props
   */
  gridContainerProps?: GridProps;
  /**
   * avatar grid item props
   */
  avatarGridProps?: GridProps;
  /**
   * button grid item props
   */
  buttonsGridProps?: GridProps;
  /**
   * outer grid container props
   */
  outerGridContainerProps?: GridProps;
  /**
   * breadcrumb list props
   */
  breadcrumbsProps?: BreadcrumbsProps;
  /**
   * breadcrumbs grid item props
   */
  breadcrumbsGridProps?: GridProps;

  /**
   * The end component
   */
  endComponent?: JSX.Element;
  /**
   * The end component grid item props
   */
  endComponentGridProps?: GridProps;
  /**
   * The content grid item props
   */
  contentGridProps?: GridProps;
}

export interface SecondNavProps {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default
   * 'primary'
   */
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'default'
    | 'transparent'
    | undefined;

  slots?: SlotProps;
}
/**
 * Primary UI component for user interaction
 */
const SecondNav = ({ color = 'inherit', slots }: SecondNavProps) => {
  const {
    appBarProps,
    avatarAndTextProps,
    avatarGridProps,
    buttonListProps = { buttons: [] },
    buttonsGridProps,
    containerProps,
    gridContainerProps,
    toolbarProps,
    outerGridContainerProps,
    breadcrumbsGridProps,
    breadcrumbsProps,
    endComponent,
    endComponentGridProps,
    contentGridProps
  } = slots || {};

  const theme = useTheme();
  return (
    <AppBar color={color} {...appBarProps}>
      <Container maxWidth="xl" {...containerProps}>
        <Toolbar
          sx={{
            minHeight: 48,
            [theme.breakpoints.up('sm')]: {
              minHeight: 64
            }
          }}
          {...toolbarProps}
        >
          <Grid container flexDirection={'column'} {...outerGridContainerProps}>
            {breadcrumbsProps && (
              <Grid item {...breadcrumbsGridProps}>
                <Breadcrumbs {...breadcrumbsProps} />
              </Grid>
            )}
            <Grid item {...contentGridProps}>
              <Grid container alignItems="center" {...gridContainerProps}>
                <Grid item flexGrow={1} {...avatarGridProps}>
                  <AvatarAndText {...avatarAndTextProps} />
                </Grid>
                {!isEmpty(buttonListProps) && (
                  <Grid item {...buttonsGridProps}>
                    <ButtonList {...buttonListProps} />
                  </Grid>
                )}
                {endComponent && (
                  <Grid item {...endComponentGridProps}>
                    {endComponent}
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default SecondNav;
