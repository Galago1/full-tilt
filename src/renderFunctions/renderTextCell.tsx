import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid-premium';
import { AvatarAndText } from 'src/components/molecules';
import { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import { get } from 'lodash';

interface RenderTextCellAvatarAndTextProps {
  avatarAndTextProps: AvatarAndTextProps;
  cellOptions: { subtitlePath?: string };
  params: GridRenderCellParams<any, any, any>;
}

const RenderAvatarAndText = ({
  avatarAndTextProps,
  cellOptions,
  params
}: RenderTextCellAvatarAndTextProps) => {
  const title = params.value;
  const subtitle = cellOptions?.subtitlePath
    ? get(params.row, cellOptions?.subtitlePath)
    : '';
  return (
    <AvatarAndText title={title} subtitle={subtitle} {...avatarAndTextProps} />
  );
};

interface RenderTextCellProps {
  avatarAndTextProps?: AvatarAndTextProps;
  cellOptions?: { subtitlePath?: string };
}
const renderTextCell = ({
  avatarAndTextProps,
  cellOptions
}: RenderTextCellProps = {}): Partial<GridColDef<any>> => {
  return {
    renderCell: (params: GridRenderCellParams<any, any, any>) => {
      return (
        <RenderAvatarAndText
          avatarAndTextProps={avatarAndTextProps!}
          cellOptions={cellOptions!}
          params={params}
        />
      );
    }
  };
};

export default renderTextCell;
