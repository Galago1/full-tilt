import type { Story, ComponentMeta } from '@storybook/react';
import { InlineText } from 'src/components/molecules/Cards/MediaCardWithContent/MediaCardWithContent.stories';
import type { CardListProps } from './CardList';
import CardList from './CardList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Card List',
  component: CardList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CardList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CardListProps> = (args) => <CardList {...args} />;

export const Empty = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Empty.args = {
  cards: []
};

const InlineTextListItem = InlineText.args as any;
export const InlineTextList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
InlineTextList.args = {
  cards: [
    InlineTextListItem,
    InlineTextListItem,
    InlineTextListItem,
    InlineTextListItem,
    InlineTextListItem
  ]
};

export const ThreeColumns = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ThreeColumns.args = {
  cards: [
    InlineTextListItem,
    InlineTextListItem,
    InlineTextListItem,
    InlineTextListItem,
    InlineTextListItem
  ],
  columns: 3
};
