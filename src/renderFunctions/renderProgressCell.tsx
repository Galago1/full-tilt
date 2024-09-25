import { Grid, GridProps } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid-premium';
import { LinearProgressIndicator } from 'src/components/molecules';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';

interface RenderProgressCellAvatarAndTextProps {
  cellOptions: {
    subtitlePath?: string;
    containerGridItemProps?: GridProps;
    progressGridItemProps?: GridProps;
  };
  params: GridRenderCellParams<any, any, any>;
}

const RenderProgressCell = ({
  cellOptions,
  params
}: RenderProgressCellAvatarAndTextProps) => {
  const { containerGridItemProps, progressGridItemProps } = cellOptions || {};
  const value = params.value;
  return (
    <Grid
      container
      alignItems={'center'}
      spacing={1}
      {...containerGridItemProps}
    >
      <Grid item sx={{ width: '100%' }} {...progressGridItemProps}>
        <LinearProgressIndicator value={+value} />
        {/* <LinearProgressIndicator value={33} /> */}
      </Grid>
    </Grid>
  );
};

interface RenderProgressCellProps {
  avatarAndTextProps?: AvatarAndTextProps;
  cellOptions?: {
    containerGridItemProps?: GridProps;
    progressGridItemProps?: GridProps;
  };
}
const renderProgressCell = ({
  cellOptions
}: RenderProgressCellProps = {}): Partial<GridColDef<any>> => {
  return {
    renderCell: (params: GridRenderCellParams<any, any, any>) => {
      return <RenderProgressCell cellOptions={cellOptions!} params={params} />;
    }
  };
};

export default renderProgressCell;
