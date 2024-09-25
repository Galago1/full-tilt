import type { GridProps, Theme } from '@mui/material';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import { CheckIcon } from 'src/components/particles/theme/overrides/CustomIcons';

export interface CustomSelectOptionProps {
  /**
   * An icon or avatar
   */
  icon?: JSX.Element;
  /**
   * A name or display value
   */
  value: string;
  /**
   * The override display value
   */
  overrideDisplayValue?: string;
  /**
   * Allows the override display value
   */
  allowOverrideDisplayValue?: boolean;
  /**
   * A description or helper text
   */
  subvalue?: string;
  /**
   * Show the checkmark
   */
  checked?: boolean;
  /**
   * Grid item props
   */
  gridItemProps?: GridProps;
}

/**
 * Primary UI component for user interaction
 */
export const CustomSelectOption = ({
  icon,
  value,
  subvalue,
  checked,
  gridItemProps,
  overrideDisplayValue,
  allowOverrideDisplayValue,
  ...props
}: CustomSelectOptionProps) => {
  return (
    <Grid
      container
      {...props}
      sx={{
        backgroundColor: (theme: Theme) =>
          checked ? theme.palette.grey[50] : 'none',
        borderRadius: 0,
        alignItems: 'center',
        padding: (theme: Theme) => theme.spacing(1.25, 1.25, 1.25, 1),
        '&:hover': (theme: Theme) => theme.palette.grey[50]
      }}
    >
      {icon && (
        <Grid
          item
          sx={{ mr: (theme: Theme) => theme.spacing(1), display: 'flex' }}
        >
          {icon}
        </Grid>
      )}
      <Grid
        item
        flexGrow={1}
        flexDirection={'row'}
        display={'flex'}
        {...gridItemProps}
      >
        <Typography
          variant="textMdRegular"
          sx={{
            mr: (theme: Theme) => theme.spacing(1),
            color: (theme: Theme) => theme.palette.grey[900]
          }}
        >
          {allowOverrideDisplayValue ? overrideDisplayValue ?? value : value}
        </Typography>
        {subvalue && (
          <Typography
            variant="textMdRegular"
            sx={{
              color: (theme: Theme) => theme.palette.grey[600]
            }}
          >
            {subvalue}
          </Typography>
        )}
      </Grid>
      {checked && (
        <Grid item display={'flex'}>
          <CheckIcon color={'primary'} />
        </Grid>
      )}
    </Grid>

    // <ListItemButton {...props}>
    //   {icon && <ListItemIcon>{icon}</ListItemIcon>}
    //   <ListItemText primary={value} />
    //   {checked && <CheckIcon color={'primary'} />}
    // </ListItemButton>
  );
};
