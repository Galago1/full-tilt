import { Theme } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { Bell01Icon } from 'src/components/particles/theme/icons/AlertsAndFeedback/bell-01';
import { Settings01Icon } from 'src/components/particles/theme/icons/General/settings-01';
import { CatalogLogoIcon } from 'src/components/particles/theme/icons/Logos/catalog-logo';
import type { FooterProps } from './Footer';
import Footer from './Footer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Footer',
  component: Footer
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Footer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const TwoIcons = Template.bind({});
TwoIcons.args = {
  buttonProps: {
    variant: 'outlined',
    color: 'secondary',
    startIcon: <CatalogLogoIcon />
  },
  avatarAndTextProps: {
    title: 'Your profile is 15% complete',
    titleTypography: { variant: 'textMdMedium' },
    sx: { my: 'auto' }
  },
  buttonListProps: {
    buttons: [
      {
        label: '',
        color: 'secondary',
        variant: 'text',
        endIcon: <Settings01Icon />
      },
      {
        label: '',
        color: 'secondary',
        variant: 'text',
        endIcon: <Bell01Icon />
      }
    ]
  }
};

export const ThreeButtons = Template.bind({});
ThreeButtons.args = {
  sx: { backgroundColor: (theme: Theme) => theme.palette.grey[50] },
  buttonProps: {
    variant: 'outlined',
    color: 'secondary',
    startIcon: <CatalogLogoIcon />
  },
  avatarAndTextProps: {
    title: 'Your profile is 15% complete',
    titleTypography: { variant: 'textMdMedium' },
    sx: { my: 'auto' }
  },
  buttonListProps: {
    buttons: [
      {
        label: 'Upgrade Now',
        color: 'secondary',
        variant: 'outlined',
        startIcon: <Settings01Icon />,
        sx: { mr: (theme: Theme) => theme.spacing(1.5) }
      },
      {
        label: '',
        color: 'secondary',
        variant: 'text',
        endIcon: <Settings01Icon />
      },
      {
        label: '',
        color: 'secondary',
        endIcon: <Bell01Icon />
      }
    ],
    buttonSpacing: 0.5
  }
};
