import { GridProps, useTheme } from '@mui/material';
import { DataGridProps } from '../DataGrid/DataGrid';
import { TablePaginationWaveProps } from 'src/components/molecules/Table/TablePaginationWave/TablePaginationWave';

interface UseResponseRateCardProps {
  slots: {
    dataGridProps: DataGridProps;
    dataGridGridItemProps: GridProps;
    tablePaginationWaveProps: TablePaginationWaveProps;
  };
}

export const useResponseRateCard = ({ slots }: UseResponseRateCardProps) => {
  const { dataGridProps, dataGridGridItemProps, tablePaginationWaveProps } =
    slots || {};
  const theme = useTheme();
  return {
    dataGridProps,
    dataGridGridItemProps,
    tablePaginationWaveProps,
    theme
  };
};
