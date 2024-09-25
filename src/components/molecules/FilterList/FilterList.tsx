import {
  Collapse,
  ListSubheader,
  ListSubheaderProps,
  MenuItem,
  Paper
} from '@mui/material';
import { Field, FieldAttributes } from 'formik';
import Divider from 'src/components/atoms/Divider/Divider';

export interface FilterListProps {
  /**
   * The list subheader props
   */
  listSubheaderProps: ListSubheaderProps;
  /**
   * The checkbox list props
   */
  fields: FieldAttributes<any>[];
  /**
   * The collapse in prop
   */
  isIn: boolean;
}

/**
 * Primary UI component for user interaction
 */
const FilterList = ({
  listSubheaderProps,
  isIn = false,
  fields
}: FilterListProps) => {
  return (
    <>
      <ListSubheader {...listSubheaderProps} />
      <Divider />
      <Collapse in={isIn}>
        <Paper sx={{ backgroundColor: 'grey.50' }}>
          {fields.map((field, index) => {
            return (
              <MenuItem key={index}>
                <Field {...field} />
              </MenuItem>
            );
          })}
        </Paper>
      </Collapse>
    </>
  );
};
export default FilterList;
