import { Theme } from '@mui/material/styles';
import { ChipProps } from 'src/components/atoms/Chip/Chip';

declare module '@mui/material/Chip' {
  interface ChipPropsSizeOverrides {
    large: true;
  }
}
const iconAvatarBase = {
  height: 16,
  width: 16
};
const deleteIcoBase = {
  height: 12,
  width: 12
};
const smallChipStyles = (ownerState: ChipProps, theme: Theme) => {
  if (ownerState.size !== 'small') return {};
  return {
    padding: theme.spacing(0.25, 1),
    ...((!!ownerState.avatar || !!ownerState.icon) && {
      paddingLeft: theme.spacing(0.375),
      '& .MuiAvatar-root, .MuiChip-icon': {
        marginRight: theme.spacing(0.75),
        marginLeft: 0,
        ...iconAvatarBase
      }
    }),
    ...((!!ownerState.deleteIcon || !!ownerState.onDelete) && {
      paddingRight: theme.spacing(0.75),
      '& .MuiChip-deleteIcon': {
        marginRight: 0,
        marginLeft: theme.spacing(0.75),
        ...deleteIcoBase
      }
    }),
    ...(!ownerState.label && {
      padding: theme.spacing(0.5),
      '& .MuiAvatar-root, .MuiChip-icon': {
        marginLeft: 0,
        marginRight: theme.spacing(-0.125),
        ...iconAvatarBase
      }
    })
  };
};

const mediumChipStyles = (ownerState: ChipProps, theme: Theme) => {
  if (ownerState.size !== 'medium') return {};
  return {
    padding: theme.spacing(0.25, 1.25),
    ...((!!ownerState.avatar || !!ownerState.icon) && {
      paddingLeft: theme.spacing(0.5),
      '& .MuiAvatar-root, .MuiChip-icon': {
        marginRight: theme.spacing(0.75),
        marginLeft: 0,
        ...iconAvatarBase
      }
    }),
    ...((!!ownerState.deleteIcon || !!ownerState.onDelete) && {
      paddingRight: theme.spacing(1),
      '& .MuiChip-deleteIcon': {
        marginRight: 0,
        marginLeft: theme.spacing(0.75),
        ...deleteIcoBase
      }
    }),
    ...(!ownerState.label && {
      padding: theme.spacing(0.5),
      '& .MuiAvatar-root, .MuiChip-icon': {
        marginLeft: 0,
        marginRight: 0,
        ...iconAvatarBase
      }
    })
  };
};

const largeChipStyles = (ownerState: ChipProps, theme: Theme) => {
  if (ownerState.size !== 'large') return {};
  return {
    padding: theme.spacing(0.5, 1.5),
    ...((!!ownerState.avatar || !!ownerState.icon) && {
      paddingLeft: theme.spacing(0.75),
      '& .MuiAvatar-root, .MuiChip-icon': {
        marginRight: theme.spacing(0.75),
        marginLeft: 0,
        ...iconAvatarBase
      }
    }),
    ...((!!ownerState.deleteIcon || !!ownerState.onDelete) && {
      paddingRight: theme.spacing(1.25),
      '& .MuiChip-deleteIcon': {
        marginRight: 0,
        marginLeft: theme.spacing(0.75),
        ...deleteIcoBase
      }
    }),
    ...(!ownerState.label && {
      padding: theme.spacing(1),
      '& .MuiAvatar-root, .MuiChip-icon': {
        marginLeft: theme.spacing(-0.25),
        marginRight: theme.spacing(-0.5),
        ...iconAvatarBase
      }
    })
  };
};

const noLabelStyles = (ownerState: ChipProps, theme: Theme) => {
  if (ownerState.label)
    return {
      '& .MuiChip-label': {
        paddingLeft: 0,
        paddingRight: 0
      }
    };
  return {
    '& .MuiChip-label': {
      padding: 0
    }
  };
};

// ----------------------------------------------------------------------
const Chip: any = (theme: Theme) => {
  return {
    MuiChip: {
      variants: [
        {
          props: { size: 'small' },
          style: {
            ...theme.typography.caption
          }
        },
        {
          props: { size: 'medium' },
          style: {
            ...theme.typography.subtitle2
          }
        },
        {
          props: { size: 'large' },
          style: {
            ...theme.typography.subtitle2
          }
        },
        {
          props: { color: 'primary' },
          style: {
            backgroundColor: theme.palette.primary[25],
            borderColor: theme.palette.primary[200],
            color: theme.palette.primary[700]
            // '& .MuiSvgIcon-root': {
            //   color: theme.palette.primary[500]
            // }
          }
        },
        {
          props: { color: 'secondary' },
          style: {
            backgroundColor: theme.palette.secondary[25],
            borderColor: theme.palette.secondary[200],
            color: theme.palette.secondary[700]
          }
        },
        {
          props: { color: 'warning' },
          style: {
            backgroundColor: theme.palette.warning[25],
            borderColor: theme.palette.warning[200],
            color: theme.palette.warning[700]
          }
        },
        {
          props: { color: 'success' },
          style: {
            backgroundColor: theme.palette.success[25],
            borderColor: theme.palette.success[200],
            color: theme.palette.success[700]
          }
        },
        {
          props: { color: 'error' },
          style: {
            backgroundColor: theme.palette.error[25],
            borderColor: theme.palette.error[200],
            color: theme.palette.error[700]
          }
        },
        {
          props: { color: 'default' },
          style: {
            backgroundColor: theme.palette.grey[50],
            borderColor: theme.palette.grey[200],
            color: theme.palette.grey[700]
          }
        }
      ],

      styleOverrides: {
        root: ({ ownerState }: { ownerState: ChipProps }) => {
          return {
            height: 'unset',
            ...smallChipStyles(ownerState, theme),
            ...mediumChipStyles(ownerState, theme),

            ...largeChipStyles(ownerState, theme),
            ...noLabelStyles(ownerState, theme)
          };
        },
        avatarColorSuccess: {
          color: theme.palette.success.contrastText,
          backgroundColor: theme.palette.success.dark
        },
        avatarColorWarning: {
          color: theme.palette.warning.contrastText,
          backgroundColor: theme.palette.warning.dark
        },
        avatarColorError: {
          color: theme.palette.error.contrastText,
          backgroundColor: theme.palette.error.dark
        }
      }
    }
  };
};

export default Chip;
