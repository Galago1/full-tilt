import { Theme, Typography, TypographyProps } from '@mui/material';
import type { GridProps } from '@mui/material/Grid';
import { Grid } from '@mui/material';

export interface SelectWithTextProps extends GridProps {
  /**
   * Switch | Checkbox | Radio props
   */
  children: JSX.Element;
  /**
   * Switch label
   */
  title: string;
  /**
   * Switch description
   */
  description?: string;
  /**
   * title typography props
   */
  titleTypographyProps?: TypographyProps;
  /**
   * description typography props
   */
  descriptionTypographyProps?: TypographyProps;
  /**
   * Optional click handler
   */
  onChange?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const SelectWithText = ({
  children,
  title,
  description,
  titleTypographyProps,
  descriptionTypographyProps,
  ...props
}: SelectWithTextProps) => {
  return (
    <Grid container spacing={1} {...props} flexWrap={'nowrap'}>
      <Grid item sx={{ '&.MuiGrid-item': { pt: 0.5 } }}>
        {children}
      </Grid>
      <Grid item>
        <Typography
          paragraph
          variant={'textSmRegular'}
          fontWeight={'regular'}
          sx={{ mb: 0, color: (theme: Theme) => theme.palette.grey[700] }}
          {...titleTypographyProps}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            paragraph
            variant={'textSmRegular'}
            sx={{ mb: 0, color: (theme: Theme) => theme.palette.grey[600] }}
            fontWeight="light"
            {...descriptionTypographyProps}
          >
            {description}
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default SelectWithText;
