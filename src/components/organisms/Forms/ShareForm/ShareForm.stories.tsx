import type { Story, ComponentMeta } from '@storybook/react';
import type { ShareFormProps } from './ShareForm';
import ShareForm from './ShareForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Share Form',
  component: ShareForm
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ShareForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ShareFormProps> = (args) => <ShareForm {...args} />;

export const CollectionPublished = Template.bind({});
CollectionPublished.args = {};

export const Share = Template.bind({});
Share.args = {
  shareLink: 'https://www.google.com',
  emptyStateProps: {
    avatarAndTextProps: {
      title: 'Share collection',
      titleTypography: {
        variant: 'textLgSemibold',
        textAlign: 'center'
      },
      subtitle:
        'Your collection is published and available for sharing. Share the link with potential buyers.',
      subtitleTypography: { textAlign: 'center', variant: 'textSmRegular' }
    }
  }
};
