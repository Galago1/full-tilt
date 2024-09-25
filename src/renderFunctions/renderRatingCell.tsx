import { Grid, GridProps } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid-premium';
import { Rating } from 'src/components';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';

interface RenderRatingCellAvatarAndTextProps {
  cellOptions: {
    subtitlePath?: string;
    containerGridItemProps?: GridProps;
    progressGridItemProps?: GridProps;
  };
  params: GridRenderCellParams<any, any, any>;
}

const RenderRatingCell = ({
  cellOptions,
  params
}: RenderRatingCellAvatarAndTextProps) => {
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
        <Rating value={+value} />
      </Grid>
    </Grid>
  );
};

interface RenderRatingCellProps {
  avatarAndTextProps?: AvatarAndTextProps;
  cellOptions?: {
    containerGridItemProps?: GridProps;
    progressGridItemProps?: GridProps;
  };
}
const renderRatingCell = ({ cellOptions }: RenderRatingCellProps = {}): Partial<
  GridColDef<any>
> => {
  return {
    renderCell: (params: GridRenderCellParams<any, any, any>) => {
      return <RenderRatingCell cellOptions={cellOptions!} params={params} />;
    }
  };
};

export default renderRatingCell;
