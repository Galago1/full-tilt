import { Checkbox, Grid, Typography, useTheme } from '@mui/material';

interface ScorecardHeadCellProps {
  content: string;
  width?: string;
  allChecked?: boolean;
  handleAllCheckboxChange?: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  showCheckbox?: boolean;
}
const ScorecardHeadCell = ({
  content,
  width,
  allChecked,
  showCheckbox = false,
  handleAllCheckboxChange
}: ScorecardHeadCellProps) => {
  const theme = useTheme();
  return (
    <Grid
      width={width}
      border={1}
      borderColor="grey.200"
      p={1}
      bgcolor={theme.palette.grey[50]}
      borderRadius={theme.spacing(0.5)}
      height={theme.spacing(5)}
      display="flex"
      alignItems="center"
      justifyContent="flex-start"
      overflow="hidden"
      mr={1}
    >
      {content === 'Owner' ? (
        <>
          <Grid width={theme.spacing(3)} height={theme.spacing(3)} />
          {showCheckbox && (
            <Checkbox
              checked={allChecked}
              onChange={handleAllCheckboxChange}
              sx={{ p: 0.25, mr: 0.5 }}
            />
          )}
          <Typography variant="textSmMedium" noWrap>
            {content}
          </Typography>
        </>
      ) : (
        <Typography variant="textSmMedium" noWrap>
          {content}
        </Typography>
      )}
    </Grid>
  );
};

export default ScorecardHeadCell;
