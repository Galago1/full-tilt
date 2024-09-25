import { Grid, SxProps, Theme, Toolbar, ToolbarProps } from '@mui/material';
import Divider, { DividerProps } from 'src/components/atoms/Divider/Divider';
import type { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import Breadcrumbs, {
  BreadcrumbsProps
} from 'src/components/molecules/Breadcrumbs/Breadcrumbs';
import type { ButtonListProps } from 'src/components/molecules/ButtonList/ButtonList';
import ButtonList from 'src/components/molecules/ButtonList/ButtonList';
import Dropdown, {
  DropdownProps
} from 'src/components/molecules/Dropdown/Dropdown';
import { responsiveSpacing } from 'src/components/particles/theme/spacing';

export interface PageHeaderProps {
  /**
   * Optional click handler
   */
  onClick?: () => void;
  slots?: {
    /**
     * Navigation Bar contents
     */
    avatarAndTextProps: AvatarAndTextProps;
    /**
     * End Buttons
     */
    buttonListProps?: ButtonListProps;
    /**
     * The Dropdown props
     */
    dropdownProps?: DropdownProps;
    /**
     * show the divider
     * @default
     * true
     */
    showDivider?: boolean;
    /**
     * Container styles
     */
    containerSx?: SxProps<Theme>;
    /**
     * Divider Props
     */
    dividerProps?: DividerProps;
    /**
     * Toolbar Props
     */
    toolbarProps?: ToolbarProps;
    /**
     * the top breadcrumb props
     */
    breadcrumbProps?: BreadcrumbsProps;
  };
}

const PageHeader = ({ slots, ...props }: PageHeaderProps) => {
  const {
    toolbarProps,
    breadcrumbProps,
    containerSx,
    avatarAndTextProps,
    dropdownProps,
    buttonListProps,
    showDivider,
    dividerProps
  } = slots || {};
  const breadCrumbGap = breadcrumbProps ? responsiveSpacing : {};
  return (
    <Toolbar {...toolbarProps}>
      <Grid container flexDirection={'column'} gap={breadCrumbGap}>
        {breadcrumbProps && (
          <Grid item>
            <Breadcrumbs {...breadcrumbProps} />{' '}
          </Grid>
        )}
        <Grid
          item
          container
          sx={{
            gap: { xs: 2, sm: 0 },
            flexDirection: { xs: 'columns', sm: 'row' },
            ...containerSx
          }}
        >
          <Grid item flexGrow={1} sx={{ my: 'auto' }}>
            <AvatarAndText {...avatarAndTextProps} />
          </Grid>
          {(buttonListProps || dropdownProps) && (
            <Grid item>
              <Grid container spacing={2} alignItems="center">
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

        {showDivider && (
          <Divider
            {...dividerProps}
            sx={{
              mt: (theme: Theme) => theme.spacing(2.25),
              ...(dividerProps?.sx || {})
            }}
          />
        )}
      </Grid>
    </Toolbar>
  );
};
export default PageHeader;
