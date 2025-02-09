import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { BusinessModelIcon } from '../theme/overrides/CustomIcons';
import type { Theme, TypographyProps } from '@mui/material';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@mui/material';
import BlockContainer from 'src/components/organisms/BlockContainer/BlockContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Foundation/Icons',
  component: Typography
  // parameters: {
  //   docs: {
  //     page: null //'Icons'
  //   }
  // }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Typography>;

const list = [{ icon: BusinessModelIcon, name: 'Business Model' }];

const Template: ComponentStory<typeof Typography> = (args: TypographyProps) => {
  return (
    <BlockContainer
      title="Icons"
      description="General icons typically used in most apps."
    >
      <List
        sx={{
          display: 'flex',
          flexFlow: 'column wrap',
          gap: (theme: Theme) => theme.spacing(0, 3.75),
          height: '100vh',
          overflow: 'auto'
        }}
      >
        {list.map((listItem: any, idx) => (
          <ListItem key={`icon-list-item-${idx}`} sx={{ width: 'auto' }}>
            <ListItemIcon>
              {listItem.icon({ ...args, sx: listItem.sx })}
            </ListItemIcon>
            <ListItemText primary={listItem.name} />
          </ListItem>
        ))}
      </List>
    </BlockContainer>
  );
};

export const UiIcons = Template.bind({});
UiIcons.args = {};
