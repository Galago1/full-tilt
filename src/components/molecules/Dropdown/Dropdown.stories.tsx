// Minimal Dropdown stories file to prevent circular dependencies
import type { ComponentMeta, Story } from '@storybook/react';
import Dropdown, { DropdownProps } from './Dropdown';
import { Grid } from '@mui/material';

// // Simple mock component to avoid importing the actual Dropdown
// const MockDropdown = (props: any) => {
//   return <div>Dropdown Component (Mock)</div>;
// };

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown
} as ComponentMeta<typeof Dropdown>;

// Simple template with no dependencies
const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

// Single story example with minimal props
export const Default = Template.bind({});
Default.args = {
  label: 'Dropdown',
  dropdownListItems: [
    {
      menuItemProps: {
        children: 'Option 1',
        onClick: () => console.log('Option 1 clicked')
      }
    },
    {
      menuItemProps: {
        children: 'Option 2',
        onClick: () => console.log('Option 2 clicked')
      }
    },
    {
      menuItemProps: {
        children: 'Option 3',
        onClick: () => console.log('Option 3 clicked')
      }
    }
  ],
  buttonProps: {
    size: 'small',
    color: 'secondary'
  }
};
// Single story example with minimal props

// Simple template with no dependencies
const EndOfScreenTemplate: Story<DropdownProps> = (args) => {
  return (
    <Grid container alignItems="flex-end" justifyContent="flex-end">
      <Grid
        item
        xs={12}
        display="flex"
        alignItems="flex-end"
        justifyContent="flex-end"
      >
        <Dropdown {...args} />
      </Grid>
    </Grid>
  );
};

export const EndOfScreen = EndOfScreenTemplate.bind({});
EndOfScreen.args = {
  label: 'Dropdown',
  dropdownListItems: [
    {
      menuItemProps: {
        children: 'Option 1',
        onClick: () => console.log('Option 1 clicked')
      }
    },
    {
      menuItemProps: {
        children: 'Option 2',
        onClick: () => console.log('Option 2 clicked')
      }
    },
    {
      menuItemProps: {
        children: 'Option 3',
        onClick: () => console.log('Option 3 clicked')
      }
    }
  ],
  buttonProps: {
    size: 'small',
    color: 'secondary'
  },
  dropdownMenuProps: {
    // This does the same, just leaving for reference
    // slotProps: {
    //   paper: {
    //     sx: { width: 300 }
    //   }
    // }
    PaperProps: {
      sx: { width: 300 }
    }
  }
};
