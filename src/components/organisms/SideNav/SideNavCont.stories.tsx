import { Grid } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import AvatarAndText from 'src/components/molecules/AvatarAndText/AvatarAndText';
import SideNavListItem, {
  SideNavListItemProps
} from 'src/components/molecules/SideNavListItem/SideNavListItem';
import {
  IconOnly,
  IconOnlyNoScale,
  TextOnly
} from 'src/components/molecules/SideNavListItem/SideNavListItem.stories';
import type { SideNavProps } from './SideNav';
import SideNav from './SideNav';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Side Nav',
  component: SideNav
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SideNav>;

const initialWidth = 80;
const expandedWidth = 280;
const transitionDuration = 200;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const generateRandomList = (count: number): SideNavListItemProps[] => {
  return Array(count)
    .fill(null)
    .map(() => ({
      ...TextOnly.args,
      listItemTextProps: {
        ...TextOnly.args?.listItemTextProps,
        primary: `Item ${Math.floor(Math.random() * 20)}`
      }
    }));
};

const originalList = [
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps,
  TextOnly.args as SideNavListItemProps
];

const isNavigationElement = (relatedTarget: EventTarget | null): boolean => {
  if (!relatedTarget || !(relatedTarget instanceof Element)) return false;

  const isMovingToIcon = Boolean(
    relatedTarget.closest('.MuiListItemButton-root')
  );

  const isMovingToList = Boolean(
    relatedTarget.closest('.MuiList-root') ||
      relatedTarget
        .closest('[class*="MuiGrid-item"]')
        ?.querySelector('.MuiList-root')
  );

  const isMovingToToolbar = Boolean(relatedTarget.closest('.MuiToolbar-root'));

  if (isMovingToIcon || isMovingToList || isMovingToToolbar) {
    return true;
  }
  return false;
};

const Template: Story<SideNavProps> = (args) => {
  const [isHovered, setIsHovered] = useState(false);
  const [randomList, setRandomList] = useState<SideNavListItemProps[]>([]);
  const [activeIconId, setActiveIconId] = useState<string | null>(null);

  // Track both hover state and current target
  const hoverStateRef = useRef({
    isHovering: false,
    currentTarget: null as HTMLElement | null,
    activeZone: null as 'icon' | 'list' | null
  });

  // Reset handler that properly cleans up state
  const resetState = useCallback(() => {
    setIsHovered(false);
    setRandomList([]);
    setActiveIconId(null);
    hoverStateRef.current = {
      isHovering: false,
      currentTarget: null,
      activeZone: null
    };
  }, []);

  const handleIconHover = (
    event: React.MouseEvent<HTMLElement>,
    iconId: string
  ) => {
    const target = event.currentTarget;

    // Only generate new list if hovering a different icon
    if (activeIconId !== iconId) {
      setActiveIconId(iconId);
      setIsHovered(true);
      setRandomList(generateRandomList(Math.floor(Math.random() * 20)));

      hoverStateRef.current = {
        isHovering: true,
        currentTarget: target,
        activeZone: 'icon'
      };
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    const relatedTarget = event.relatedTarget as HTMLElement;

    if (isNavigationElement(relatedTarget)) {
      return;
    }

    resetState();
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      resetState();
    };
  }, [resetState]);

  const finalArgs: SideNavProps = useMemo(
    () => ({
      ...args,
      sx: {
        ...args.sx,
        width: isHovered ? expandedWidth : initialWidth,
        transition: (theme) =>
          theme.transitions.create(['width'], {
            duration: transitionDuration
          }),
        '& .MuiDrawer-paper': {
          width: isHovered ? expandedWidth : initialWidth,
          backgroundColor: 'transparent',
          transition: (theme) =>
            theme.transitions.create(['width'], {
              duration: transitionDuration
            })
        }
      },
      slide: isHovered,
      leftGridItemProps: {
        sx: {
          width: initialWidth,
          flexShrink: 0,
          position: 'relative',
          zIndex: 2,
          backgroundColor: (theme) => theme.palette.grey[900],
          height: '100%'
        }
      },
      sideNavListItemIconsListProps: {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          overflow: 'visible',
          width: initialWidth,
          backgroundColor: (theme) => theme.palette.grey[900]
        }
      },
      rightColumnSx: {
        position: 'absolute',
        left: initialWidth,
        top: 0,
        height: '100%',
        backgroundColor: (theme) => theme.palette.grey[900],
        borderLeft: (theme) => theme.border.basicBox,
        width: expandedWidth - initialWidth,
        overflow: 'hidden'
      },
      sideNavListItemIcons: args.sideNavListItemIcons.map((icon, index) => ({
        ...icon,
        listItemButtonProps: {
          ...icon.listItemButtonProps,
          onMouseEnter: (e) => handleIconHover(e, `icon-${index}`),
          onMouseLeave: handleMouseLeave
        }
      })),
      sideNavListItems: isHovered ? randomList : [],
      sideNavListItemsListProps: {
        ...args.sideNavListItemsListProps,
        onMouseLeave: handleMouseLeave,
        sx: {
          ...(args.sideNavListItemsListProps?.sx || {}),
          backgroundColor: (theme) => theme.palette.grey[900],
          color: (theme) => theme.palette.common.white
        }
      }
    }),
    [args, isHovered, randomList, handleMouseLeave]
  );

  return <SideNav {...finalArgs} />;
};

export const Second = Template.bind({});
Second.args = {
  useTopContentDivider: false,
  sx: {
    width: initialWidth,
    '& .MuiDrawer-paper': {
      width: initialWidth,
      backgroundColor: 'transparent',
      overflow: 'visible'
    }
  },
  PaperProps: {
    sx: { overflow: 'visible' }
  },
  contentContainerGridItemProps: {
    sx: {
      position: 'relative',
      overflow: 'hidden',
      backgroundColor: (theme) => theme.palette.grey[900],
      marginTop: '48px' // Add space for the fixed toolbar
    }
  },
  sidebarContainerSx: {
    backgroundColor: (theme) => theme.palette.grey[900],
    position: 'relative',
    overflow: 'visible'
  },
  toolbarProps: {
    sx: {
      minHeight: { xs: 48 },
      position: 'fixed',
      top: 0,
      width: initialWidth,
      zIndex: 3,
      backgroundColor: (theme) => theme.palette.grey[900]
    },
    disableGutters: true,
    children: (
      <Grid
        container
        alignItems={'center'}
        flexWrap={'nowrap'}
        sx={{
          height: '100%',
          minHeight: 48,
          backgroundColor: (theme) => theme.palette.grey[900]
        }}
      >
        <Grid
          item
          sx={{
            height: '100%',
            backgroundColor: (theme) => theme.palette.grey[900]
          }}
        >
          <SideNavListItem
            {...(IconOnlyNoScale.args as SideNavListItemProps)}
            sx={{
              height: '100%'
            }}
            listItemIconProps={{
              sx: {
                minWidth: 'auto',
                minHeight: (theme) => theme.spacing(3.5),
                alignItems: 'center',
                justifyContent: 'center',
                width: 45,
                backgroundColor: (theme) => theme.palette.grey[800],
                padding: 10 / 8,
                borderRadius: '10px',
                color: (theme) => theme.palette.common.white,
                '&': { mr: 0 },
                '&:hover': {
                  backgroundColor: (theme) => theme.palette.grey[600]
                }
              }
            }}
          />
        </Grid>
      </Grid>
    )
  },
  secondaryToolbarProps: {
    sx: {
      minHeight: { xs: 56 },
      px: 2,
      color: (theme) => theme.palette.common.white
    },
    children: (
      <AvatarAndText
        title="Untitled UI3"
        titleTypography={{
          variant: 'textMdSemibold',
          sx: { color: (theme) => theme.palette.common.white }
        }}
      />
    )
  },
  showSecondaryToolbarDivider: false,
  sideNavListItemIconsBottom: [
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps
  ],
  sideNavListItemIcons: [
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps
  ],
  sideNavListItems: [],
  sideNavListItemsListProps: {
    sx: {
      backgroundColor: (theme) => theme.palette.grey[900],
      color: (theme) => theme.palette.common.white
    }
  }
};
