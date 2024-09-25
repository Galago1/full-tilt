import { Box } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import SectionFooter, { SectionFooterProps } from './SectionFooter';
import ThemeProvider from 'src/components/particles/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Card/Section Footer',
  component: SectionFooter
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SectionFooter>;

const Template: Story<SectionFooterProps> = (args) => {
  return (
    <ThemeProvider>
      <Box sx={{ width: '100%', height: 1500 }}>
        <SectionFooter {...args} />
      </Box>
    </ThemeProvider>
  );
};

export const ShowAllButtons = Template.bind({});
ShowAllButtons.args = {
  slots: {
    leftButtonGroupProps: {
      buttons: [{ label: 'One' }, { label: 'Two' }]
    },
    leftButtonProps: {
      variant: 'text',
      label: 'Learn More'
    },
    rightButtonsProps: {
      buttons: [
        { label: 'Tertiary', variant: 'text' },
        { label: 'Secondary', variant: 'outlined' },
        { label: 'Primary', variant: 'contained' }
      ]
    }
  }
};

export const ShowWithoutGroup = Template.bind({});
ShowWithoutGroup.args = {
  slots: {
    leftButtonProps: {
      variant: 'text',
      label: 'Learn More'
    },
    rightButtonsProps: {
      buttons: [
        { label: 'Tertiary', variant: 'text' },
        { label: 'Secondary', variant: 'outlined' },
        { label: 'Primary', variant: 'contained' }
      ]
    }
  }
};
