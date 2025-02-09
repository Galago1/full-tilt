import { IconButton } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { InfoCircleIcon } from 'src/components/particles/theme/icons/General/info-circle';
import type { IconWithTooltipProps } from './IconWithTooltip';
import IconWithTooltip from './IconWithTooltip';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Icon With Tooltip',
  component: IconWithTooltip
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof IconWithTooltip>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<IconWithTooltipProps> = (args) => (
  <IconWithTooltip {...args} />
);

export const WithDescription = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithDescription.args = {
  tooltipProps: {
    title: 'Insurance mumbo jumbo here'
  },
  children: (
    <IconButton>
      <InfoCircleIcon titleAccess="info" sx={{ width: 16, height: 16 }} />
    </IconButton>
  )
};
