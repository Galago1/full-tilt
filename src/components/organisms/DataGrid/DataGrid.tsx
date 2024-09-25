import type { SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';
import {
  DataGridPremium,
  DataGridPremiumProps,
  LicenseInfo
} from '@mui/x-data-grid-premium';
import { MuiXDataGridPremiumKey } from 'src/constants/keys';

LicenseInfo.setLicenseKey(MuiXDataGridPremiumKey);

export interface DataGridProps extends DataGridPremiumProps {
  /**
   * Box style overriedes
   */
  boxSx?: SxProps<Theme>;
}
const DataGrid = ({
  boxSx = { height: (theme: Theme) => theme.spacing(87.5), width: '100%' },
  ...props
}: DataGridProps) => {
  return (
    <Box sx={{ ...boxSx }}>
      <DataGridPremium {...props} />
    </Box>
  );
};

export default DataGrid;
