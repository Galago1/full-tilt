import { Box, Grid, Typography } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { useEffect, useState } from 'react';
import Button from 'src/components/atoms/Button/Button';
import { GenericMenuListProps } from 'src/components/molecules/Sidenav/GenericMenuList/GenericMenuList';
import SideNavListItem, {
  SideNavListItemProps
} from 'src/components/molecules/SideNavListItem/SideNavListItem';
import {
  IconOnly,
  IconOnlyActive,
  TextAndIcon,
  TextAndIconActive,
  TextAndIconFlex1,
  TextOnly,
  TextOnlyActive
} from 'src/components/molecules/SideNavListItem/SideNavListItem.stories';
import { ArrowLeftIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import finalItemProps, { SideNavItemProps } from 'src/utils/finalItemProps';
import type { SideNavProps } from './SideNav';
import SideNav from './SideNav';

const thirtyPx = 30 / 8;

let sideNavItems: SideNavItemProps[] = [
  {
    title: 'Anatomy',
    pathname: '/ALIGNMENT_ANATOMY',
    sx: { '& .MuiListItemButton-root': { py: 0 } },
    listItemTextProps: {
      sx: {
        '& .MuiTypography-root': { fontWeight: '600 !important' },
        ml: thirtyPx
      }
    }
  },
  {
    title: 'Audience',
    pathname: '/ALIGNMENT_AUDIENCE',
    sx: { '& .MuiListItemButton-root': { py: 0 } },
    listItemTextProps: {
      sx: {
        '& .MuiTypography-root': { fontWeight: '600 !important' },
        ml: thirtyPx
      }
    }
  },
  {
    title: 'Analysis',
    pathname: '/ALIGNMENT_ANALYSIS',
    sx: { '& .MuiListItemButton-root': { py: 0 } },
    listItemTextProps: {
      sx: {
        '& .MuiTypography-root': { fontWeight: '600 !important' },
        ml: thirtyPx
      }
    }
  },
  {
    title: 'Vision of Success',
    pathname: '/ALIGNMENT_VISION_OF_SUCCESS',
    sx: { '& .MuiListItemButton-root': { py: 0 } },
    listItemTextProps: {
      sx: {
        '& .MuiTypography-root': { fontWeight: '600 !important' },
        ml: thirtyPx
      }
    }
  }
];

const glNavItemsProps = (
  onClick: (item: SideNavItemProps, active: boolean) => void,
  isOpen: boolean
): GenericMenuListProps => {
  const active = isOpen;
  const listItems = sideNavItems.map((item: SideNavItemProps) => {
    const sideItem = finalItemProps({
      item,
      active: false,
      onClick: (item: SideNavItemProps) => onClick(item, active || isOpen),
      isOpen: active || isOpen
    });

    return sideItem;
  });

  return {
    listItems,
    isIn: active,
    collapseProps: {}
  };
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Side Nav',
  component: SideNav
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SideNav>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SideNavProps> = (args) => {
  // const [alignmentOpen, setAlignmentOpen] = useState(false);
  // const onClick = () => {
  //   setAlignmentOpen((prev) => !prev);
  // };
  // const genericMenuListProps = glNavItemsProps(onClick, alignmentOpen);

  const finalArgs: SideNavProps = {
    ...args,
    sideNavListItemIcons: [...args.sideNavListItemIcons]
  } as any;

  return <SideNav {...finalArgs} />;
};

export const Overview = Template.bind({});

Overview.args = {
  sideNavListItemIconsBottomDivider: true,

  slide: false,
  sx: {
    width: 280,
    '& .MuiDrawer-paper': {
      width: 280
    }
  },
  PaperProps: {
    sx: { overflow: 'hidden' }
  },
  toolbarProps: {
    disableGutters: true,
    children: (
      <SideNavListItem
        {...(TextAndIcon.args as SideNavListItemProps)}
        sx={{ height: '100%' }}
        boxProps={{
          sx: { display: 'flex', flexGrow: 1, width: '100%' }
        }}
        listItemIconProps={{
          sx: {
            minWidth: 'auto',
            minHeight: (theme) => theme.spacing(3.5),
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%'
          }
        }}
        listItemTextProps={{
          primary: 'Overview'
        }}
        listItemButtonProps={{ sx: { pl: 2.1875, py: 0.5 } }}
      />
    )
  },
  sideNavListItemIconsBottom: [
    TextAndIcon.args as SideNavListItemProps,
    TextAndIcon.args as SideNavListItemProps
  ],
  sideNavListItemIcons: [
    TextAndIconActive.args as SideNavListItemProps,
    TextAndIconFlex1.args as SideNavListItemProps,
    TextAndIconFlex1.args as SideNavListItemProps,
    TextAndIconFlex1.args as SideNavListItemProps,
    TextAndIconFlex1.args as SideNavListItemProps
  ]
};

export const Second = Template.bind({});
Second.args = {
  slide: true,
  sx: {
    width: 280,
    '& .MuiDrawer-paper': {
      width: 280
    }
  },
  PaperProps: {
    sx: { overflow: 'hidden' }
  },
  toolbarProps: {
    disableGutters: true,
    children: (
      <Grid
        container
        alignItems={'center'}
        flexWrap={'nowrap'}
        sx={{ height: '100%' }}
      >
        <Grid
          item
          sx={{
            height: '100%'
          }}
        >
          <SideNavListItem
            {...(IconOnly.args as SideNavListItemProps)}
            sx={{ height: '100%' }}
            listItemIconProps={{
              sx: {
                minWidth: 'auto',
                minHeight: (theme) => theme.spacing(3.5),
                alignItems: 'center',
                justifyContent: 'center',
                width: 45
              }
            }}
          />
        </Grid>
        {/* <Slide in={slide} direction={slide ? 'left' : 'right'} */}
        <Grid
          item
          flexGrow={1}
          display={'flex'}
          alignItems={'center'}
          sx={{
            height: '100%',
            borderLeft: (theme) => `1px solid ${theme.palette.grey[300]}`
          }}
        >
          <Typography variant={'textMdRegular'} sx={{ px: 3 }}>
            Alpha Gamma Delta
          </Typography>
        </Grid>
      </Grid>
    )
  },
  sideNavListItemIconsBottom: [
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps
  ],
  sideNavListItemIcons: [
    IconOnlyActive.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
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
  sideNavListItems: [
    TextOnlyActive.args as SideNavListItemProps,
    TextOnly.args as SideNavListItemProps
  ]
};

export const Third = Template.bind({});
Third.args = {
  slide: true,
  sx: {
    width: 280,
    '& .MuiDrawer-paper': {
      width: 280
    }
  },
  PaperProps: {
    sx: { overflow: 'hidden' }
  },
  toolbarProps: {
    disableGutters: true,
    children: (
      <Grid
        container
        alignItems={'center'}
        flexWrap={'nowrap'}
        sx={{ height: '100%' }}
      >
        <Grid
          item
          sx={{
            height: '100%'
          }}
        >
          <SideNavListItem
            {...(IconOnly.args as SideNavListItemProps)}
            sx={{ height: '100%' }}
            listItemIconProps={{
              sx: {
                minWidth: 'auto',
                minHeight: (theme) => theme.spacing(3.5),
                alignItems: 'center',
                justifyContent: 'center',
                width: 45
              }
            }}
          />
        </Grid>
        <Grid
          item
          flexGrow={1}
          display={'flex'}
          sx={{
            height: '100%',
            borderLeft: (theme) => `1px solid ${theme.palette.grey[300]}`
          }}
        >
          <Grid
            container
            flexWrap={'nowrap'}
            alignItems={'center'}
            sx={{ px: 2 }}
          >
            <Grid item>
              <Button size={'small'} endIcon={<ArrowLeftIcon />} />
            </Grid>
            <Grid item>
              <Typography variant={'textMdRegular'}>
                Alpha Gamma Delta
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  },
  secondaryToolbarProps: {
    disableGutters: true,
    children: (
      <Typography variant={'textMdRegular'} sx={{ px: 3 }}>
        National Housing Corporation
      </Typography>
    )
  },
  sideNavListItemIconsBottom: [
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps
  ],
  sideNavListItemIcons: [
    IconOnlyActive.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
    IconOnly.args as SideNavListItemProps,
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
  sideNavListItems: [
    TextOnlyActive.args as SideNavListItemProps,
    TextOnly.args as SideNavListItemProps
  ]
};

const addClickToItems = (
  props: SideNavProps,
  setSlide: React.Dispatch<React.SetStateAction<boolean>>
): SideNavProps => {
  return {
    ...props,
    sideNavListItemIcons: props.sideNavListItemIcons?.map((item) => {
      return {
        ...item,
        onClick: () => {
          setSlide((prev) => {
            return !prev;
          });
        }
      };
    })
  } as any;
};

const FadeTemplate: Story<SideNavProps> = (_args) => {
  const [slide, setSlide] = useState(false);
  const [args, setArgs] = useState(() =>
    addClickToItems(Overview.args as SideNavProps, setSlide)
  );

  useEffect(() => {
    if (slide) {
      setArgs(addClickToItems(Third.args as SideNavProps, setSlide));
    } else {
      setArgs(addClickToItems(Overview.args as SideNavProps, setSlide));
    }
  }, [slide]);

  return <SideNav {...args} />;
};

export const StepThrough = FadeTemplate.bind({});
