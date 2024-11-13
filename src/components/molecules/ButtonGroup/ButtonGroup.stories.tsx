import type { ComponentMeta, Story } from '@storybook/react';
import { CheckCircleIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import type { ButtonGroupProps } from './ButtonGroup';
import ButtonGroup from './ButtonGroup';
import { ThemeProvider } from 'src/components/particles';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/ButtonGroup',
  component: ButtonGroup
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ButtonGroup>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonGroupProps> = (args) => (
  <ThemeProvider>
    <ButtonGroup {...args} />
  </ThemeProvider>
);

export const Default = Template.bind({ title: 'Secondary' });
Default.args = {
  buttons: [
    { label: 'Button One', color: 'secondary' },
    { label: 'Button Two', color: 'secondary' },
    { label: 'Button Three', color: 'secondary' }
  ]
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  buttons: [
    {
      label: 'Button One',
      startIcon: <CheckCircleIcon />,
      tooltip: 'First button tooltip'
    },
    {
      label: 'Button Two',
      startIcon: <CheckCircleIcon />,
      tooltip: 'Second button tooltip'
    },
    {
      label: 'Button Three',
      startIcon: <CheckCircleIcon />,
      tooltip: 'Third button tooltip'
    }
  ]
};

export const EndIcon = Template.bind({ title: 'EndIcon' });
EndIcon.args = {
  buttons: [
    {
      label: 'Button One',
      endIcon: <CheckCircleIcon />
    },
    {
      label: 'Button Two',
      endIcon: <CheckCircleIcon />
    },
    {
      label: 'Button Three',
      endIcon: <CheckCircleIcon />
    }
  ]
};

export const IconOnly = Template.bind({ title: 'IconOnly' });
IconOnly.args = {
  buttons: [
    {
      endIcon: <CheckCircleIcon />
    },
    {
      endIcon: <CheckCircleIcon />
    },
    {
      endIcon: <CheckCircleIcon />
    }
  ]
};
