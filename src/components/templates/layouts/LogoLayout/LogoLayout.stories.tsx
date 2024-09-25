import type { ComponentMeta, Story } from '@storybook/react';
import type { LogoLayoutProps } from './LogoLayout';
import LogoLayout from './LogoLayout';
import {
  GalagoFullIcon,
  GalagoLogoIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import { Theme } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Templates/Layouts/Logo Layout',
  component: LogoLayout,
  parameters: {
    layout: 'fullscreen'
  }
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof LogoLayout>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<LogoLayoutProps> = (args) => {
  return <LogoLayout {...args} />;
};

export const LogoLayoutTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LogoLayoutTemplate.args = {
  topNavProps: {
    // 'data-testid': 'custom element'
    showDivider: true,
    largeToolbar: true,
    // onLogoClick={() => push?.(loginPage as string)}
    logoGridItemSx: { textAlign: 'center' },
    color: 'secondary',
    logo: (
      <GalagoLogoIcon
        viewBox="0 0 32 32"
        sx={{
          '&.MuiSvgIcon-root': {
            width: (theme: Theme) => theme.spacing(4),
            height: (theme: Theme) => theme.spacing(4),
            '& svg': { width: '100%', height: '100%' }
          }
        }}
      />
    )
  }
};

export const LogoLayoutFullTemplate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LogoLayoutFullTemplate.args = {
  topNavProps: {
    // 'data-testid': 'custom element'
    showDivider: true,
    largeToolbar: true,
    // onLogoClick={() => push?.(loginPage as string)}
    logoGridItemSx: { textAlign: 'center' },
    color: 'secondary',
    logo: (
      <GalagoFullIcon
        viewBox="0 0 145 32"
        sx={{
          '&.MuiSvgIcon-root': { width: 145, height: 38, pt: 0.625 }
        }}
      />
    )
  }
};
