import type { Story, ComponentMeta } from '@storybook/react';
import type { BlockProps } from './Block';
import Block from './Block';
import IconWithTooltip, {
  IconWithTooltipProps
} from '../IconWithTooltip/IconWithTooltip';
import { WithDescription } from '../IconWithTooltip/IconWithTooltip.stories';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Block',
  component: Block
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Block>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<BlockProps> = (args) => <Block {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  paperSx: { p: 3 },
  avatarAndTextProps: {
    title: 'Icons',
    subtitle: 'Generic Description'
  }
};
export const GreyBackground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
GreyBackground.args = {
  paperSx: { p: 3, backgroundColor: 'grey.100' },
  avatarAndTextProps: {
    sx: { my: 'auto' },
    title: (
      <>
        Limits and Retention
        <IconWithTooltip {...(WithDescription.args as IconWithTooltipProps)} />
      </>
    ),
    titleTypography: {
      color: 'main',
      fontWeight: 'textMdRegular'
    }
  }
};
