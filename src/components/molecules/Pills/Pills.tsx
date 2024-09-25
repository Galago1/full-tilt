import { Grid, SxProps, Theme, useTheme } from '@mui/material';
import pillTabs from 'src/utils/tabs/pillTabs';
import Tabs from '../Tabs/Tabs';

export interface PillsProps {
  value: 0 | 1 | 2 | 3;
  moveTabSx?: SxProps<Theme>;
  dividerTabSx?: SxProps<Theme>;
  removeTabSx?: SxProps<Theme>;
  sx?: SxProps<Theme>;
  tabsSx?: SxProps<Theme>;
  includeEdit: boolean;
  handleChange: (newValue: 0 | 2 | 3) => void;
}

const Pills = ({
  sx,
  value = 1,
  moveTabSx,
  dividerTabSx,
  removeTabSx,
  tabsSx,
  includeEdit,
  handleChange
}: PillsProps) => {
  const theme = useTheme();
  return (
    <Grid
      container
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      sx={{
        bottom: '-19px', // 1/3 * 57
        position: 'absolute',

        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',

        ...sx
      }}
    >
      <Tabs
        sx={tabsSx}
        value={value}
        textColor={'secondary'}
        hideIndicator={true}
        showBackground={false}
        showBottomBorder={false}
        showMobileDropdown={false}
        tabs={pillTabs({
          theme,
          value,
          moveTabSx,
          dividerTabSx,
          removeTabSx,
          handleChange,
          includeEdit
        })}
      />
    </Grid>
  );
};

export default Pills;
