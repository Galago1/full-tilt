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
  listItemIcon: <ShieldZapIcon />,
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
  listItemIcon: <ShieldZapIcon />,
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
  listItemIcon: <ShieldZapIcon />,
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

export const IconOnly = Template.bind({});
IconOnly.args = {
  listItemIconProps: {
    sx: {
      minWidth: 'auto',
      minHeight: (theme) => theme.spacing(3.5),
      alignItems: 'center'
    }
  },
  listItemIcon: <ShieldZapIcon />,
  containingBoxProps: {
    sx: { flex: 1 }
  },
  boxProps: {
    sx: {
      display: 'flex',
      flexGrow: 1,
      p: 0.5,
      height: 40,
      width: 48,
      justifyContent: 'center'
    }
  },
  listItemButtonProps: {
    sx: { py: 0.5 }
  }
};
export const IconOnlyActive = Template.bind({});
IconOnlyActive.args = {
  listItemIconProps: {
    sx: {
      minWidth: 'auto',
      minHeight: (theme) => theme.spacing(3.5),
      alignItems: 'center'
    }
  },
  listItemIcon: <ShieldZapIcon />,
  containingBoxProps: {
    sx: { flex: 1 }
  },
  boxProps: {
    sx: {
      display: 'flex',
      flexGrow: 1,
      p: 0.5,
      backgroundColor: 'grey.100',
      height: 40,
      width: 48,
      justifyContent: 'center'
    }
  },
  listItemButtonProps: {
    sx: { py: 0.5 }
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
