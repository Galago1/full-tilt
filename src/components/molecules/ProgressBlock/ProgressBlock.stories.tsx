/* eslint-disable react/no-children-prop */
import { Theme } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { CheckCircleIcon } from 'src/components/particles/theme/icons/General/check-circle';
import { Image03Icon } from 'src/components/particles/theme/icons/Images/image-03';
import FeaturedIcon from '../../atoms/FeaturedIcon/FeaturedIcon';
import type { ProgressBlockProps } from './ProgressBlock';
import ProgressBlock from './ProgressBlock';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Progress Block',
  component: ProgressBlock
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ProgressBlock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ProgressBlockProps> = (args) => (
  <ProgressBlock {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  paperSx: { p: 3 },
  avatarAndTextProps: {
    title: 'Bill of sale.pdf',
    subtitle: '200 KB – 25% uploaded',
    avatarProps: {
      children: (
        <FeaturedIcon
          color={'primary'}
          dual={true}
          children={<Image03Icon />}
        />
      )
    }
  },
  loadingIndicatorProps: {
    value: 25
  },
  sx: { p: 0 }
};

export const Completed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Completed.args = {
  paperSx: {
    p: 3,
    border: (theme: Theme) => `1px solid ${theme.palette.primary[500]}`
  },
  avatarAndTextProps: {
    sx: { my: 'auto' },
    title: 'Tech design requirements.pdf',
    subtitle: '200 KB – 100% uploaded',
    avatarProps: {
      children: (
        <FeaturedIcon
          color={'primary'}
          dual={true}
          children={<Image03Icon />}
        />
      )
    }
  },
  iconProps: <CheckCircleIcon />,
  sx: { p: 0 }
};
