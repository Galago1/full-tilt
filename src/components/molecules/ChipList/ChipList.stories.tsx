import type { Story, ComponentMeta } from '@storybook/react';
import type { ChipListProps } from './ChipList';
import ChipList from './ChipList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Chip List',
  component: ChipList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ChipList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ChipListProps> = (args) => <ChipList {...args} />;

export const TwoChips = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TwoChips.args = {
  chips: [
    {
      label: 'Primary clickable',
      color: 'primary',
      clickable: true,
      onDelete: () => {}
    },
    {
      label: 'Primary clickable',
      color: 'primary',
      clickable: true,
      onDelete: () => {}
    }
  ]
};

export const ThreeChips = Template.bind({});
ThreeChips.args = {
  chips: [
    {
      label: 'Primary clickable',
      color: 'primary',
      clickable: true,
      onDelete: () => {}
    },
    {
      label: 'Primary clickable',
      color: 'primary',
      clickable: true,
      onDelete: () => {}
    },
    {
      label: 'Primary clickable',
      color: 'primary',
      clickable: true,
      onDelete: () => {}
    }
  ]
};
