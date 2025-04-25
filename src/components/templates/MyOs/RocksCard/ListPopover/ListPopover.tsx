import { Grid, Popover } from '@mui/material';
import { useState } from 'react';
import Button from 'src/components/atoms/Button/Button';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';
import { RockStatus } from '../RockStatusForm/RockStatusForm';

export const useListPopover = (
  onChange: (values: { id: string; newValue: RockStatus }) => void
) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOptionClick = (id: string, newValue: RockStatus) => {
    onChange({ id, newValue });
    handleClose();
  };

  return { anchorEl, handleClick, handleClose, handleOptionClick };
};

export interface ListPopoverProps {
  anchorEl: HTMLElement | null;
  handleClose: () => void;
  options: SelectOption[];
  handleOptionClick: (id: string, newValue: RockStatus) => void;
  iconMap: any;
  id: string;
}
const ListPopover = ({
  anchorEl,
  handleClose,
  options = [],
  handleOptionClick,
  iconMap,
  id
}: ListPopoverProps) => {
  return (
    <>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        sx={{
          '& .MuiPaper-root': {
            mt: 1,
            p: 1,
            minWidth: 120
          }
        }}
      >
        <Grid container direction="column" spacing={1}>
          {options.map((option) => (
            <Grid item key={option.value}>
              <Button
                fullWidth
                variant="text"
                onClick={(event) => {
                  event.stopPropagation();
                  handleOptionClick(id, option.value);
                }}
                startIcon={iconMap[option.value]}
                label={option.label.value}
                sx={{
                  justifyContent: 'flex-start',
                  px: 2,
                  py: 1
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Popover>
    </>
  );
};

export default ListPopover;
