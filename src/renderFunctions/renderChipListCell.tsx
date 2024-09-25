import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid-premium';
import { get } from 'lodash';
import ChipList, {
  ChipListProps
} from 'src/components/molecules/ChipList/ChipList';

interface RenderChipListCellAvatarAndTextProps {
  cellOptions: {
    subtitlePath?: string[];
    chipColors?: string[];
    defaultChipColor?: string;
  };
  params: GridRenderCellParams<any, any, any>;
  // chipColorsFn?: (value: string) => string;
}

const RenderChipList = ({
  cellOptions,
  params
}: RenderChipListCellAvatarAndTextProps) => {
  const title = params.value;
  const { chipColors, defaultChipColor, subtitlePath } = cellOptions || {};

  const subtitles = subtitlePath
    ? subtitlePath.map((path) => get(params.row, path))
    : [];

  const labels = [title, ...subtitles];

  const chipListProps: ChipListProps = {
    chips:
      labels.map((label, index) => {
        return {
          label,
          color: chipColors?.[index] ?? defaultChipColor
        };
      }) || []
  } as ChipListProps;

  return <ChipList {...chipListProps} />;
};

interface RenderTextCellProps {
  cellOptions?: {
    subtitlePath?: string[];
    chipColors?: string[];
    defaultChipColor?: string;
  };
}
const renderChipListCell = ({ cellOptions }: RenderTextCellProps = {}): Partial<
  GridColDef<any>
> => {
  return {
    renderCell: (params: GridRenderCellParams<any, any, any>) => {
      return <RenderChipList cellOptions={cellOptions!} params={params} />;
    }
  };
};

export default renderChipListCell;
