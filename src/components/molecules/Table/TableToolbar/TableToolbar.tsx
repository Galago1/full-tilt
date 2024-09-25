import type { ToolbarProps, TooltipProps } from '@mui/material';
import { Toolbar, Tooltip } from '@mui/material';
import type { AvatarAndTextProps } from 'src/components/molecules/AvatarAndText/AvatarAndText';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import ButtonList, {
  ButtonListProps
} from 'src/components/molecules/ButtonList/ButtonList';

export interface TableToolbarProps extends ToolbarProps {
  /**
   * Avatar And Text Props
   */
  avatarAndTextProps: AvatarAndTextProps;
  /**
   * Avatar And Text Props
   */
  buttonListProps?: ButtonListProps;
  /**
   * Avatar And Text Props
   */
  tooltipProps?: TooltipProps;
}

const TableToolbar = ({
  avatarAndTextProps,
  buttonListProps,
  tooltipProps,
  ...props
}: TableToolbarProps) => {
  return (
    <Toolbar {...props} sx={{ ...props.sx, minHeight: 'auto !important' }}>
      <AvatarAndText {...avatarAndTextProps} />
      {tooltipProps && <Tooltip {...tooltipProps} />}
      {buttonListProps && <ButtonList {...buttonListProps} />}
    </Toolbar>
  );
};

export default TableToolbar;
