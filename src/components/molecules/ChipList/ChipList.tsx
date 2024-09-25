import type { GridProps, SxProps } from '@mui/material';
import { Grid } from '@mui/material';
import type { ChipProps } from 'src/components/atoms/Chip/Chip';
import Chip from 'src/components/atoms/Chip/Chip';

export interface ChipListProps extends GridProps {
  /**
   * List of chips
   */
  chips: ChipProps[];
  /**
   * Css style overrides
   */
  sx?: SxProps;
  /**
   * Optional children
   */
  children?: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const ChipList = ({ chips, sx, children, ...props }: ChipListProps) => {
  return (
    <Grid container sx={sx} spacing={1.5} {...props}>
      {chips.map((chip: ChipProps, index: number) => {
        return (
          <Grid
            item
            key={`Chip-list-index[${index}]`}
            sx={{ alignSelf: 'center' }}
          >
            <Chip {...chip} />
          </Grid>
        );
      })}
      {children}
    </Grid>
  );
};
export default ChipList;
