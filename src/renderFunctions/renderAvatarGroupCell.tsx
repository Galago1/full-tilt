import { AvatarGroup, AvatarGroupProps, Grid, GridProps } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid-premium';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';

interface RenderButtonListCellAvatarAndTextProps {
  cellOptions: {
    avatarGroupProps?: AvatarGroupProps;
    containerGridItemProps?: GridProps;
    progressGridItemProps?: GridProps;
  };
  params: GridRenderCellParams<any, any, any>;
}

const RenderButtonListCell = ({
  cellOptions,
  params
}: RenderButtonListCellAvatarAndTextProps) => {
  const { containerGridItemProps, progressGridItemProps, avatarGroupProps } =
    cellOptions || {};
  const value = params.value as string[];
  return (
    <Grid
      container
      alignItems={'center'}
      spacing={1}
      {...containerGridItemProps}
    >
      <Grid item sx={{ width: '100%' }} {...progressGridItemProps}>
        <AvatarGroup {...avatarGroupProps!}>
          {value.map((item, index) => (
            <Avatar key={index} alt={item} src={item} />
          ))}
        </AvatarGroup>
      </Grid>
    </Grid>
  );
};

interface RenderButtonListCellProps {
  avatarAndTextProps?: AvatarAndTextProps;
  cellOptions?: {
    avatarGroupProps?: AvatarGroupProps;
    containerGridItemProps?: GridProps;
    progressGridItemProps?: GridProps;
  };
}
const renderAvatarGroupCell = ({
  cellOptions
}: RenderButtonListCellProps = {}): Partial<GridColDef<any>> => {
  return {
    renderCell: (params: GridRenderCellParams<any, any, any>) => {
      return (
        <RenderButtonListCell cellOptions={cellOptions!} params={params} />
      );
    }
  };
};

export default renderAvatarGroupCell;
