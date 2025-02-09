import type { ComponentMeta, Story } from '@storybook/react';
import { ChevronRightIcon } from 'src/components/particles/theme/icons/Arrows/chevron-right';
import { SlashDividerIcon } from 'src/components/particles/theme/icons/General/slash-divider';
import type { BreadcrumbsProps } from './Breadcrumbs';
import Breadcrumbs from './Breadcrumbs';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Breadcrumbs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<BreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const HomeOnly = Template.bind({ title: 'Secondary' });
HomeOnly.args = {
  breadcrumbs: [{ label: '', onClick: () => {} }]
};
export const HomeEnd = Template.bind({ title: 'Secondary' });
HomeEnd.args = {
  breadcrumbs: [
    { label: '', href: '/' },
    { label: 'End', href: '/' }
  ]
};
export const HomeMiddleEnd = Template.bind({ title: 'Secondary' });
HomeMiddleEnd.args = {
  breadcrumbs: [
    { label: '', href: '/' },
    { label: 'Middle', href: '/' },
    { label: 'End', href: '/' }
  ]
};

export const SlashSeparator = Template.bind({ title: 'Secondary' });
SlashSeparator.args = {
  breadcrumbs: [
    { label: '', href: '/' },
    { label: 'Middle', href: '/' },
    { label: 'End', href: '/' }
  ],
  separator: <SlashDividerIcon color={'secondary'} />
};

export const ArrowSeparator = Template.bind({ title: 'Secondary' });
ArrowSeparator.args = {
  breadcrumbs: [
    { label: '', href: '/' },
    { label: 'Middle', href: '/' },
    {
      label: 'End',
      href: '/',
      sx: {
        backgroundColor: (theme: any) => theme.palette.grey[50],
        borderRadius: 0,
        padding: (theme: any) => theme.spacing(0.5, 1)
      }
    }
  ],
  separator: <ChevronRightIcon color={'secondary'} />
};
