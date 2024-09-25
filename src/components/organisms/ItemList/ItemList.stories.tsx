import type { ComponentMeta, Story } from '@storybook/react';
import { ItemWithContentProps } from 'src/components/molecules/ItemWithContent/ItemWithContent';
import {
  ItemOnly,
  ItemWithButton
} from 'src/components/molecules/ItemWithContent/ItemWithContent.stories';
import type { ItemListProps } from './ItemList';
import ItemList from './ItemList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Item List',
  component: ItemList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ItemList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ItemListProps> = (args) => <ItemList {...args} />;

export const Blank = Template.bind({});
Blank.args = {
  items: [
    ItemOnly.args as ItemWithContentProps,
    ItemWithButton.args as ItemWithContentProps
  ]
};
