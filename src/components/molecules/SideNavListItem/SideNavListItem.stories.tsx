import type { ComponentMeta, Story } from '@storybook/react';
import type { SideNavListItemProps } from './SideNavListItem';
import SideNavListItem from './SideNavListItem';
import { ShieldZapIcon } from 'src/components/particles/theme/overrides/CustomIcons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Side Nav List Item',
  component: SideNavListItem
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SideNavListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SideNavListItemProps> = (args) => {
  return <SideNavListItem {...args} />;
};

export const TextAndIcon = Template.bind({});
TextAndIcon.args = {
  listItemTextProps: {
    primary: 'Overview',
    sx: { ml: 1.75 }
  },
  listItemIconProps: {
    sx: {
      minWidth: 'auto',
      minHeight: (theme) => theme.spacing(3.5),
      alignItems: 'center'
    }
  },
  listItemIcon: <ShieldZapIcon sx={{ '&': { fontSize: '24px !important' } }} />,
  boxProps: {
    sx: {
      display: 'flex',
      flexGrow: 1,
      padding: '4px 12px'
      // width: '100%'
    }
  },
  listItemButtonProps: {
    sx: { py: 0.5 }
  }
};

export const TextAndIconFlex1 = Template.bind({});
TextAndIconFlex1.args = {
  listItemTextProps: {
    primary: 'Overview',
    sx: { ml: 1.75 }
  },
  listItemIconProps: {
    sx: {
      minWidth: 'auto',
      minHeight: (theme) => theme.spacing(3.5),
      alignItems: 'center'
    }
  },
  listItemIcon: <ShieldZapIcon sx={{ '&': { fontSize: '24px !important' } }} />,
  containingBoxProps: {
    sx: { flex: 1 }
  },
  boxProps: {
    sx: {
      display: 'flex',
      flexGrow: 1,
      padding: '4px 12px'
    }
  },
  listItemButtonProps: {
    sx: { py: 0.5 }
  }
};

export const TextAndIconActive = Template.bind({});
TextAndIconActive.args = {
  listItemTextProps: {
    primary: 'Overview',
    sx: { ml: 1.75 }
  },
  listItemIconProps: {
    sx: {
      minWidth: 'auto',
      minHeight: (theme) => theme.spacing(3.5),
      alignItems: 'center'
    }
  },
  listItemIcon: <ShieldZapIcon sx={{ '&': { fontSize: '24px !important' } }} />,
  containingBoxProps: {
    sx: { flex: 1 }
  },
  boxProps: {
    sx: {
      display: 'flex',
      flexGrow: 1,
      padding: '4px 12px',
      backgroundColor: 'grey.100'
    }
  },
  listItemButtonProps: {
    sx: { py: 0.5 }
  }
};

export const IconOnlyNoScale = Template.bind({});
IconOnlyNoScale.args = {
  listItemIconProps: {
    sx: {
      minWidth: 'auto',
      minHeight: (theme) => theme.spacing(3.5),
      alignItems: 'center',
      borderRadius: 1,
      padding: 1,
      // transition: 'background-color 0.2s ease, transform 0.2s ease',
      '&': { mr: 0 }
    }
  },
  listItemIcon: <ShieldZapIcon sx={{ '&': { fontSize: '24px !important' } }} />,
  containingBoxProps: {
    sx: { flex: 1 }
  },
  boxProps: {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexGrow: 1,
      p: 0.5,
      height: 'auto',
      width: 48,
      justifyContent: 'center'
    }
  },
  listItemButtonProps: {
    sx: {
      py: 0.5,
      flexDirection: 'column',
      '&:hover': {
        backgroundColor: 'transparent'
      }
    }
  }
};
export const IconOnly = Template.bind({});
IconOnly.args = {
  listItemIconProps: {
    sx: {
      minWidth: 'auto',
      minHeight: (theme) => theme.spacing(3.5),
      alignItems: 'center',
      borderRadius: 1,
      padding: 1,
      // transition: 'background-color 0.2s ease, transform 0.2s ease',
      '&': { mr: 0 }
    }
  },
  listItemIcon: <ShieldZapIcon sx={{ '&': { fontSize: '24px !important' } }} />,
  containingBoxProps: {
    sx: { flex: 1 }
  },
  boxProps: {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexGrow: 1,
      p: 0.5,
      height: 'auto',
      width: 48,
      justifyContent: 'center'
    }
  },
  listItemButtonProps: {
    sx: {
      py: 0.5,
      flexDirection: 'column',
      '&:hover': {
        backgroundColor: 'transparent',
        '& .MuiListItemIcon-root': {
          transform: 'scale(1.125)'
        }
      }
    }
  }
};

export const IconBottomLabel = Template.bind({});
IconBottomLabel.args = {
  ...IconOnly.args,
  listItemTextProps: {
    primary: 'Knowledge',
    primaryTypographyProps: {
      variant: 'textXXsMedium'
    }
  }
};
export const IconOnlyActive = Template.bind({});
IconOnlyActive.args = {
  listItemIconProps: {
    sx: {
      minWidth: 'auto',
      minHeight: (theme) => theme.spacing(3.5),
      alignItems: 'center',
      backgroundColor: (theme) => theme.palette.primary.main,
      borderRadius: 1,
      padding: 1,
      color: 'white',
      transition: 'background-color 0.2s ease, transform 0.2s ease',
      '&': { mr: 0 }
    }
  },
  listItemIcon: <ShieldZapIcon sx={{ '&': { fontSize: '24px !important' } }} />,
  listItemTextProps: {
    primary: 'Label',
    primaryTypographyProps: {
      variant: 'textXXsMedium'
    }
  },
  containingBoxProps: {
    sx: { flex: 1 }
  },
  boxProps: {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      flexGrow: 1,
      p: 0.5,
      height: 'auto',
      width: 48,
      justifyContent: 'center'
    }
  },
  listItemButtonProps: {
    sx: {
      py: 0.5,
      flexDirection: 'column',
      '&:hover': {
        backgroundColor: 'transparent',
        '& .MuiListItemIcon-root': {
          backgroundColor: (theme) => theme.palette.primary.dark,
          transform: 'scale(1.125)'
        }
      }
    }
  }
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  listItemTextProps: {
    primary: 'Overview'
  },
  containingBoxProps: {
    sx: { flex: 1 }
  },
  boxProps: {
    sx: {
      display: 'flex',
      flexGrow: 1,
      py: 0.5,
      px: 1.5
    }
  },
  listItemButtonProps: {
    sx: { py: 0.5 }
  }
};

export const TextOnlyActive = Template.bind({});
TextOnlyActive.args = {
  listItemTextProps: {
    primary: 'Overview'
  },
  tooltipProps: {
    title: 'Overview'
  },
  containingBoxProps: {
    sx: { flex: 1 }
  },
  boxProps: {
    sx: {
      display: 'flex',
      flexGrow: 1,
      py: 0.5,
      px: 1.5,
      backgroundColor: 'grey.100'
    }
  },
  listItemButtonProps: {
    sx: { py: 0.5 }
  }
};
