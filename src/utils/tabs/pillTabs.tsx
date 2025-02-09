import { SxProps, TabProps, Theme } from '@mui/material';
import Divider from 'src/components/atoms/Divider/Divider';
import { Expand05Icon } from 'src/components/particles/theme/icons/Arrows/expand-05';
import { Edit05Icon } from 'src/components/particles/theme/icons/General/edit-05';
import { Trash01Icon } from 'src/components/particles/theme/icons/General/trash-01';

interface PillTabs {
  theme: Theme;
  value: 0 | 1 | 2 | 3;
  moveTabSx?: SxProps<Theme>;
  dividerTabSx?: SxProps<Theme>;
  removeTabSx?: SxProps<Theme>;
  handleChange: (newValue: 0 | 2 | 3) => void;
  includeEdit: boolean;
}
const pillTabs = ({
  theme,
  value,
  moveTabSx,
  dividerTabSx,
  removeTabSx,
  includeEdit,
  handleChange
}: PillTabs): TabProps[] => {
  const moveTab = {
    icon: <Expand05Icon />,
    label: 'Move',
    sx: {
      height: 40,
      minHeight: 'unset',
      flexDirection: 'row',
      borderTopLeftRadius: 40,
      borderBottomLeftRadius: 40,
      backgroundColor: theme.palette.common.white,
      color: value === 0 ? theme.palette.success[500] : theme.palette.grey[500],
      '&.Mui-selected': {
        color: theme.palette.success[500]
      },
      '&>.MuiTab-iconWrapper': {
        mb: 0,
        mr: '5px'
      },
      ...moveTabSx
    },
    onClick: () => handleChange(0)
  } as TabProps;
  const dividerTab = {
    label: '',
    icon: (
      <Divider
        orientation="vertical"
        sx={{ color: theme.palette.primary[500] }}
      />
    ),
    sx: {
      height: 40,
      minHeight: 'unset',
      '&.MuiTab-root': {
        padding: '8px 0'
      },
      minWidth: '5px',
      backgroundColor: theme.palette.common.white,
      ...dividerTabSx
    },
    disabled: true
  } as TabProps;
  const removeTab = {
    icon: <Trash01Icon />,
    label: 'Remove',
    sx: {
      height: 40,
      minHeight: 'unset',
      flexDirection: 'row',
      backgroundColor: theme.palette.common.white,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      '&>.MuiTab-iconWrapper': {
        mb: 0,
        mr: '5px'
      },
      color: theme.palette.primary[500],
      ...removeTabSx
    },
    onClick: () => handleChange(2)
  } as TabProps;
  const editTab = {
    icon: <Edit05Icon />,
    label: 'Edit',
    sx: {
      height: 40,
      minHeight: 'unset',
      flexDirection: 'row',
      backgroundColor: theme.palette.common.white,
      //   borderTopRightRadius: 40,
      //   borderBottomRightRadius: 40,
      '&>.MuiTab-iconWrapper': {
        mb: 0,
        mr: '5px'
      },
      color: theme.palette.primary[500],
      ...removeTabSx
    },
    onClick: () => handleChange(3)
  } as TabProps;
  const tabs = includeEdit
    ? [moveTab, dividerTab, removeTab, dividerTab, editTab]
    : [moveTab, dividerTab, removeTab];
  return tabs;
};

export default pillTabs;
