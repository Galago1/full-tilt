import type { Story, ComponentMeta } from '@storybook/react';
import { InlineText } from 'src/components/molecules/Cards/MediaCardWithContent/MediaCardWithContent.stories';
import type { MasonryListProps } from './MasonryList';
import MasonryList from './MasonryList';
import horizontal from 'src/assets/images/horizontal-test.png';
import vertical from 'src/assets/images/vertical-test.png';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Masonry List',
  component: MasonryList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof MasonryList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<MasonryListProps> = (args) => <MasonryList {...args} />;

export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Empty.args = {
  cards: []
};

const InlineTextListItem = InlineText.args as any;
export const InlineTextList = Template.bind({});
InlineTextList.args = {
  cards: [
    { ...InlineTextListItem, image: horizontal },
    { ...InlineTextListItem, image: vertical },
    InlineTextListItem,
    { ...InlineTextListItem, image: horizontal },
    { ...InlineTextListItem, image: vertical },
    InlineTextListItem
  ],
  spacing: 3
};

export const ThreeColumns = Template.bind({});
ThreeColumns.args = {
  cards: [
    { ...InlineTextListItem, image: horizontal },
    { ...InlineTextListItem, image: vertical }
    // InlineTextListItem,
    // { ...InlineTextListItem, image: horizontal },
    // { ...InlineTextListItem, image: vertical },
    // InlineTextListItem
  ],
  columns: 3,
  spacing: 3
};
