import { ListItemTextProps, SxProps, Theme } from '@mui/material';
import { isEmpty } from 'lodash';
import { ReactNode } from 'react';
import { TooltipProps } from 'src/components/atoms/Tooltip/Tooltip';
import { SideNavListItemProps } from 'src/components/molecules/SideNavListItem/SideNavListItem';
import {
  ChevronDownIcon,
  ChevronUpIcon
} from 'src/components/particles/theme/overrides/CustomIcons';

export interface SideNavItemProps {
  icon?: ReactNode;
  greyIcon?: ReactNode;
  title: string;
  pathname: string;
  path?: string;
  sx?: SxProps<Theme>;
  children?: ReactNode;
  listItemEndIcon?: ReactNode;
  listItemEndIconProps?: ReactNode;
  listItemTextProps?: ListItemTextProps;
}

const determineChevron = (item: SideNavItemProps, active: boolean) => {
  const isChildrenEmpty = isEmpty(item.children);
  if (isChildrenEmpty) return undefined;

  if (active) return <ChevronUpIcon />;
  return <ChevronDownIcon />;
};

export const TextAndIcon: SideNavListItemProps = {
  tooltipProps: { title: '' },
  sx: { '& .MuiSvgIcon-root': { fontSize: '1.5rem !important' } },
  listItemTextProps: {
    sx: { '& .MuiTypography-root': { fontWeight: '600 !important' } }
  },
  listItemIconProps: {
    sx: {
      minWidth: 'auto',
      minHeight: (theme: Theme) => theme.spacing(3.5),
      alignItems: 'center'
    }
  },
  boxProps: {
    sx: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1,
      padding: '12px 12px',
      borderRadius: '6px'
    }
  },
  listItemButtonProps: {
    sx: { py: 0.5, px: 0 }
  },
  containingBoxProps: {
    sx: { width: '100%' }
  }
};

interface FinalItemProps {
  item: SideNavItemProps;
  active: boolean;
  onClick: (item: SideNavItemProps, active: boolean) => void;
  isOpen: boolean;
}
const finalItemProps = ({ item, active, onClick, isOpen }: FinalItemProps) => {
  const tooltipProps: TooltipProps = {
    title: '',
    children: undefined
  };

  const sideItem = {
    ...TextAndIcon,

    sx: {
      ...TextAndIcon.sx,
      ...item.sx
    },
    tooltipProps,
    ...{
      listItemTextProps: {
        ...TextAndIcon.listItemTextProps,
        primary: item.title,
        ...item.listItemTextProps,
        sx: {
          '& .MuiTypography-root': {
            fontWeight: '600 !important'
          },
          color: (theme: Theme) =>
            active ? theme.palette.primary[600] : theme.palette.text.primary,
          ...item.listItemTextProps?.sx
        }
      }
    },
    ...{
      listItemIconProps: {
        ...TextAndIcon.listItemIconProps,
        sx: {
          ...TextAndIcon.listItemIconProps?.sx,
          alignItems: 'flex-end',
          mr: 1,
          minHeight: 'auto',
          '&': {
            color: (theme: Theme) =>
              active ? theme.palette.primary[600] : theme.palette.text.disabled
          }
        }
      }
    },
    ...{
      boxProps: {
        ...TextAndIcon.boxProps,
        width: '100% !important',
        sx: {
          ...TextAndIcon.boxProps?.sx,
          backgroundColor: (theme: Theme) =>
            active ? theme.palette.grey[50] : theme.palette.common.white,
          flexGrow: 1,
          '&:hover': {
            backgroundColor: (theme: Theme) => theme.palette.grey[50]
          },
          '&': {
            width: '100% !important'
          }
        }
      }
    },
    listItemIcon: active ? item.icon : item.greyIcon,
    onClick: () => onClick(item, active),
    children: item.children,
    listItemEndIcon: determineChevron(item, isOpen)
  } as SideNavListItemProps;
  return sideItem;
};

export default finalItemProps;
