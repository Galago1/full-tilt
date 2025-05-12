import { Grid, Typography } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { useCallback, useEffect, useState } from 'react';
import Button from 'src/components/atoms/Button/Button';
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
import { ArrowLeftIcon } from 'src/components/particles/theme/icons/Arrows/arrow-left';
import type { SideNavProps } from './SideNav';
import SideNav from './SideNav';
import { DropdownListItem } from 'src/components/molecules/Dropdown/DropdownList/DropdownList';
import { Edit01Icon } from 'src/components/particles/theme/icons/General/edit-01';
import { PlusIcon } from 'src/components/particles/theme/icons/General/plus';
import { DeleteIcon } from 'src/components/particles/theme/icons/Editor/delete';
import { SideNavItemWithDropdownProps } from './SideNavGroup';

// Define dropdown items for the group action menus
const groupActionItems: DropdownListItem[] = [
  {
    menuItemProps: {
      onClick: () => {
        console.log('Add new item');
      },
      children: (
        <Grid container gap={1} alignItems="center">
          <Grid item>
            <PlusIcon fontSize="small" />
          </Grid>
          <Grid item>Add Item</Grid>
        </Grid>
      )
    }
  },
  {
    menuItemProps: {
      onClick: () => {
        console.log('Edit group');
      },
      children: (
        <Grid container gap={1} alignItems="center">
          <Grid item>
            <Edit01Icon fontSize="small" />
          </Grid>
          <Grid item>Edit Group</Grid>
        </Grid>
      )
    }
  },
  {
    menuItemProps: {
      onClick: () => {
        console.log('Delete group');
      },
      children: (
        <Grid container gap={1} alignItems="center">
          <Grid item>
            <DeleteIcon fontSize="small" color="error" />
          </Grid>
          <Grid item sx={{ color: 'error.main' }}>
            Delete Group
          </Grid>
        </Grid>
      ),
      sx: { color: 'error.main' }
    }
  }
];

// Create initial slide groups structure using the same pattern
const buildInitialSlideGroups = () => {
  const builtSlideGroups = [
    {
      id: 'slide-group-1',
      title: 'Slide Group 1',
      items: [
        {
          id: 'slide-item-1-1',
          listItemTextProps: {
            primary: 'Slide Item 1-1'
          }
        },
        {
          id: 'slide-item-1-2',
          listItemTextProps: {
            primary: 'Slide Item 1-2'
          }
        },
        // The dropdown item
        {
          id: 'slide-item-1-dropdown',
          listItemTextProps: {
            primary: 'Slide Group 1 Actions'
          },
          dropdownListItems: groupActionItems
        }
      ] as SideNavItemWithDropdownProps[]
    },
    {
      id: 'slide-group-2',
      title: 'Slide Group 2',
      items: [
        {
          id: 'slide-item-2-1',
          listItemTextProps: {
            primary: 'Slide Item 2-1'
          }
        },
        {
          id: 'slide-item-2-2',
          listItemTextProps: {
            primary: 'Slide Item 2-2'
          }
        },
        {
          id: 'slide-item-2-3',
          listItemTextProps: {
            primary: 'Slide Item 2-3'
          }
        },
        // The dropdown item
        {
          id: 'slide-item-2-dropdown',
          listItemTextProps: {
            primary: 'Slide Group 2 Actions'
          },
          dropdownListItems: groupActionItems
        }
      ]
    }
  ];
  return builtSlideGroups;
};

// Build the initial groups with their draggable items + dropdown at the end
const buildInitialGroups = () => {
  const builtGroups = [
    {
      id: 'group-1',
      title: 'First Group',
      items: [
        {
          id: 'item-1-1',
          listItemTextProps: {
            primary: 'Item 1-1'
          }
        },
        {
          id: 'item-1-2',
          listItemTextProps: {
            primary: 'Item 1-2'
          }
        },
        {
          id: 'item-1-3',
          listItemTextProps: {
            primary: 'Item 1-3'
          }
        },
        // The dropdown item
        {
          id: 'item-1-dropdown',
          listItemTextProps: {
            primary: 'Group 1 Actions'
          },
          dropdownListItems: groupActionItems
        }
      ] as SideNavItemWithDropdownProps[]
    },
    {
      id: 'group-2',
      title: 'Second Group',
      items: [
        {
          id: 'item-2-1',
          listItemTextProps: {
            primary: 'Item 2-1'
          }
        },
        {
          id: 'item-2-2',
          listItemTextProps: {
            primary: 'Item 2-2'
          }
        },
        // The dropdown item
        {
          id: 'item-2-dropdown',
          listItemTextProps: {
            primary: 'Group 2 Actions'
          },
          dropdownListItems: groupActionItems
        }
      ] as SideNavItemWithDropdownProps[]
    },
    {
      id: 'group-3',
      title: 'Third Group',
      items: [
        {
          id: 'item-3-1',
          listItemTextProps: {
            primary: 'Item 3-1'
          }
        },
        {
          id: 'item-3-2',
          listItemTextProps: {
            primary: 'Item 3-2'
          }
        },
        {
          id: 'item-3-3',
          listItemTextProps: {
            primary: 'Item 3-3'
          }
        },
        {
          id: 'item-3-4',
          listItemTextProps: {
            primary: 'Item 3-4'
          }
        },
        // The dropdown item
        {
          id: 'item-3-dropdown',
          listItemTextProps: {
            primary: 'Group 3 Actions'
          },
          dropdownListItems: groupActionItems
        }
      ] as SideNavItemWithDropdownProps[]
    }
  ];
  return builtGroups;
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
    sideNavListItemIcons: [...(args as any).sideNavListItemIcons]
  };

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
  ],
  sideNavListOtherItems: [
    // TextAndIconActive.args as SideNavListItemProps,
    TextAndIconFlex1.args as SideNavListItemProps
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

// Enhanced Draggable SideNav story with visual drop line indicators
const DraggableTemplate: Story<SideNavProps> = (args) => {
  const initialSideNavListItemIcons = args.sideNavListItemIcons || [];
  const initialSideNavListItems = args.sideNavListItems || [];
  const initialSideNavListOtherItems = args.sideNavListOtherItems || [];

  // Create initial groups structure with dropdown menu items added at the end of each group
  const [groups, setGroups] = useState(buildInitialGroups());

  const [slideGroups, setSlideGroups] = useState(buildInitialSlideGroups());

  // Legacy state for backward compatibility
  const [sections, setSections] = useState<SideNavListItemProps[]>(
    initialSideNavListItemIcons.map((section, index) => ({
      ...section,
      id: `section-${index}`
    }))
  );

  const [items, setItems] = useState<SideNavListItemProps[]>(
    initialSideNavListItems.map((item, index) => ({
      ...item,
      id: `item-${index}`
    }))
  );

  const [otherItems, setOtherItems] = useState<SideNavListItemProps[]>(
    initialSideNavListOtherItems.map((item, index) => ({
      ...item,
      id: `other-item-${index}`
    }))
  );

  // Universal move section/group handler that manages all group states
  const moveSection = useCallback(
    (groupId: string, sourceIndex: number, destinationIndex: number) => {
      console.log('moveSection', groupId, sourceIndex, destinationIndex);

      // Update sections state (legacy)
      const draggedSection = sections[sourceIndex];
      if (!draggedSection) return;

      const newSections = [...sections];
      newSections.splice(sourceIndex, 1);
      newSections.splice(destinationIndex, 0, draggedSection);
      setSections(newSections);

      // Also update the groups state
      setGroups((prevGroups) => {
        const newGroups = [...prevGroups];
        const [movedGroup] = newGroups.splice(sourceIndex, 1);
        newGroups.splice(destinationIndex, 0, movedGroup);
        return newGroups;
      });

      // If you're using slide groups, update those too
      setSlideGroups((prevSlideGroups) => {
        if (prevSlideGroups.length <= Math.max(sourceIndex, destinationIndex)) {
          return prevSlideGroups;
        }
        const newSlideGroups = [...prevSlideGroups];
        const [movedGroup] = newSlideGroups.splice(sourceIndex, 1);
        newSlideGroups.splice(destinationIndex, 0, movedGroup);
        return newSlideGroups;
      });
    },
    [sections]
  );

  // Universal move item handler that manages all relevant state
  const moveItem = useCallback(
    (
      sectionIndexOrId: number | string,
      dragIndex: number,
      hoverIndex: number
    ) => {
      console.log('moveItem', sectionIndexOrId, dragIndex, hoverIndex);
      if (typeof sectionIndexOrId === 'string') {
        // This is a group-based move
        const groupId = sectionIndexOrId;

        // Update the specific group's items
        setGroups((prevGroups) => {
          // Find the group by ID
          const groupIndex = prevGroups.findIndex(
            (group) => group.id === groupId
          );

          if (groupIndex === -1) return prevGroups;

          // Create new arrays to avoid mutation
          const newGroups = [...prevGroups];
          const group = { ...newGroups[groupIndex] };
          const groupItems = [...group.items];

          // Only move items that are not dropdown menu items (which should be at the end)
          // Prevent moving the last item (dropdown menu)
          const isLastItemDropdown =
            groupItems[groupItems.length - 1].dropdownListItems !== undefined;
          const lastDraggableIndex = isLastItemDropdown
            ? groupItems.length - 2
            : groupItems.length - 1;

          // If trying to move a non-draggable item or move a draggable item after the dropdown, prevent it
          if (
            dragIndex > lastDraggableIndex ||
            hoverIndex > lastDraggableIndex
          ) {
            return prevGroups;
          }

          // Perform the move
          const [removed] = groupItems.splice(dragIndex, 1);
          groupItems.splice(hoverIndex, 0, removed);

          // Update the group with the new items order
          group.items = groupItems;
          newGroups[groupIndex] = group;

          return newGroups;
        });

        // Also update slide groups if the same groupId exists there
        setSlideGroups((prevSlideGroups) => {
          const groupIndex = prevSlideGroups.findIndex(
            (group) => group.id === groupId
          );

          if (groupIndex === -1) return prevSlideGroups;

          const newSlideGroups = [...prevSlideGroups];
          const group = { ...newSlideGroups[groupIndex] };
          const items = [...group.items];

          const isLastItemDropdown =
            items[items.length - 1].dropdownListItems !== undefined;
          const lastDraggableIndex = isLastItemDropdown
            ? items.length - 2
            : items.length - 1;

          if (
            dragIndex > lastDraggableIndex ||
            hoverIndex > lastDraggableIndex
          ) {
            return prevSlideGroups;
          }

          const [removed] = items.splice(dragIndex, 1);
          items.splice(hoverIndex, 0, removed);

          group.items = items;
          newSlideGroups[groupIndex] = group;

          return newSlideGroups;
        });

        return;
      }

      // This is a legacy section-based move
      const sectionIndex = sectionIndexOrId as number;

      // Handle the case where we're in a section
      if (sectionIndex === 0) {
        const draggedItem = items[dragIndex];
        if (!draggedItem) return;

        const newItems = [...items];
        newItems.splice(dragIndex, 1);
        newItems.splice(hoverIndex, 0, draggedItem);
        setItems(newItems);

        // Also update the corresponding group items if they exist
        const firstGroup = groups[0];
        if (firstGroup) {
          setGroups((prevGroups) => {
            if (!prevGroups[0]) return prevGroups;

            const newGroups = [...prevGroups];
            const group = { ...newGroups[0] };
            const groupItems = [...group.items];

            // Skip if indices are out of bounds
            if (
              dragIndex >= groupItems.length ||
              hoverIndex >= groupItems.length
            ) {
              return prevGroups;
            }

            const [removed] = groupItems.splice(dragIndex, 1);
            groupItems.splice(hoverIndex, 0, removed);

            group.items = groupItems;
            newGroups[0] = group;

            return newGroups;
          });
        }

        // Also update the corresponding slide group items
        if (slideGroups.length > 0 && slideGroups[0]) {
          setSlideGroups((prevSlideGroups) => {
            if (!prevSlideGroups[0]) return prevSlideGroups;

            const newSlideGroups = [...prevSlideGroups];
            const group = { ...newSlideGroups[0] };
            const items = [...group.items];

            // Skip if indices are out of bounds
            if (dragIndex >= items.length || hoverIndex >= items.length) {
              return prevSlideGroups;
            }

            const [removed] = items.splice(dragIndex, 1);
            items.splice(hoverIndex, 0, removed);

            group.items = items;
            newSlideGroups[0] = group;

            return newSlideGroups;
          });
        }
      }
      // Handle the case where we're in "other items"
      else if (sectionIndex === 1) {
        const draggedItem = otherItems[dragIndex];
        if (!draggedItem) return;

        const newOtherItems = [...otherItems];
        newOtherItems.splice(dragIndex, 1);
        newOtherItems.splice(hoverIndex, 0, draggedItem);
        setOtherItems(newOtherItems);

        // Also update the corresponding group items if they exist
        const secondGroup = groups[1];
        if (secondGroup) {
          setGroups((prevGroups) => {
            if (prevGroups.length <= 1) return prevGroups;

            const newGroups = [...prevGroups];
            const group = { ...newGroups[1] };
            const groupItems = [...group.items];

            // Skip if indices are out of bounds
            if (
              dragIndex >= groupItems.length ||
              hoverIndex >= groupItems.length
            ) {
              return prevGroups;
            }

            const [removed] = groupItems.splice(dragIndex, 1);
            groupItems.splice(hoverIndex, 0, removed);

            group.items = groupItems;
            newGroups[1] = group;

            return newGroups;
          });
        }

        // Also update the corresponding slide group items
        if (slideGroups.length > 1 && slideGroups[1]) {
          setSlideGroups((prevSlideGroups) => {
            if (prevSlideGroups.length <= 1) return prevSlideGroups;

            const newSlideGroups = [...prevSlideGroups];
            const group = { ...newSlideGroups[1] };
            const items = [...group.items];

            // Skip if indices are out of bounds
            if (dragIndex >= items.length || hoverIndex >= items.length) {
              return prevSlideGroups;
            }

            const [removed] = items.splice(dragIndex, 1);
            items.splice(hoverIndex, 0, removed);

            group.items = items;
            newSlideGroups[1] = group;

            return newSlideGroups;
          });
        }
      }
    },
    [items, otherItems, groups, slideGroups]
  );

  return (
    <Grid container>
      <Grid item xs={12} sx={{ mb: 2 }}>
        <Typography variant="h6">
          Draggable SideNav with Group Support
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          This SideNav demonstrates a group-based drag-and-drop experience. You
          can drag groups to reorder them, and items within each group. Each
          group has a non-draggable dropdown menu at the end.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <SideNav
          {...args}
          // Pass the fully controlled groups state
          groups={groups}
          slideGroups={slideGroups}
          // Pass legacy state
          sideNavListItemIcons={sections}
          sideNavListItems={items}
          sideNavListOtherItems={otherItems}
          // Pass the move handlers that now fully control all state
          moveSection={moveSection}
          moveItem={moveItem}
          draggable={true}
        />
      </Grid>
    </Grid>
  );
};

export const Draggable = DraggableTemplate.bind({});
Draggable.args = {
  ...Overview.args,
  sx: {
    width: 280,
    '& .MuiDrawer-paper': {
      width: 280
    }
  },
  topSectionDraggable: false, // Top section items are not draggable
  draggable: true, // Group items are draggable
  slide: false
};
