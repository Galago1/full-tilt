import { Grid, GridProps } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid-premium';
import { ButtonList } from 'src/components';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import { ButtonListProps } from 'src/components/molecules/ButtonList/ButtonList';

interface RenderButtonListCellAvatarAndTextProps {
  cellOptions: {
    buttonListProps?: ButtonListProps;
    containerGridItemProps?: GridProps;
    progressGridItemProps?: GridProps;
  };
  params: GridRenderCellParams<any, any, any>;
}

const RenderButtonListCell = ({
  cellOptions,
  params
}: RenderButtonListCellAvatarAndTextProps) => {
  const { containerGridItemProps, progressGridItemProps, buttonListProps } =
    cellOptions || {};
  // const value = params.value;
  return (
    <Grid
      container
      alignItems={'center'}
      spacing={1}
      {...containerGridItemProps}
    >
      <Grid item sx={{ width: '100%' }} {...progressGridItemProps}>
        <ButtonList {...buttonListProps!} />
      </Grid>
    </Grid>
  );
};

interface RenderButtonListCellProps {
  avatarAndTextProps?: AvatarAndTextProps;
  cellOptions?: {
    buttonListProps?: ButtonListProps;
    containerGridItemProps?: GridProps;
    progressGridItemProps?: GridProps;
  };
}
const renderButtonListCell = ({
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

export default renderButtonListCell;
