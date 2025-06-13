import type { Story, ComponentMeta } from '@storybook/react';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import { Formik, Field } from 'formik';
import type { SelectInputBaseProps, SelectOption } from './SelectInputBase';
import SelectInputBase from './SelectInputBase';
import { Box } from '@mui/material';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input Base/Select Input Base',
  component: SelectInputBase,
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%', maxWidth: '500px' }}>
        <Story />
      </Box>
    )
  ]
} as ComponentMeta<typeof SelectInputBase>;

const basicOptions: SelectOption[] = [
  {
    value: 1,
    label: { value: 'Basic Label' },
    containerSx: {
      height: 28
    }
  }
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SelectInputBaseProps> = (args) => {
  return (
    <Formik
      initialValues={{ name: args.SelectProps?.multiple ? ['none'] : 'none' }}
      onSubmit={(v) => {}}
    >
      <Field {...args} name="name">
        {({ field }: any) => {
          return <SelectInputBase {...args} {...field} />;
        }}
      </Field>
    </Formik>
  );
};

export const NoneSelected = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoneSelected.args = {
  defaultOptionLabel: 'Select an option',
  value: 'none',
  options: basicOptions
};

export const CheckSelected = Template.bind({});
CheckSelected.args = {
  optionContainerSx: {
    height: 32
  },
  SelectProps: {
    multiple: true,
    sx: {
      '& .MuiSelect-select': {
        display: 'flex'
      }
    }
  },
  options: [
    {
      value: '1',
      label: {
        value: 'value',
        subvalue: 'other val',
        icon: (
          <Avatar sx={{ height: 24, width: 24 }}>
            <>HR</>
          </Avatar>
        )
        // checked: true
      },
      menuItem: {
        sx: {
          px: 0,
          mx: 1
        }
      },
      containerSx: {
        height: 32
      }
    },
    {
      value: '2',
      label: {
        value: 'Other value',
        subvalue: 'Other other val',
        icon: (
          <Avatar sx={{ height: 24, width: 24 }}>
            <>HK</>
          </Avatar>
        )
        // checked: false
      },
      menuItem: {
        sx: {
          px: 0,
          mx: 1
        }
      },
      containerSx: {
        height: 32
      }
    },
    {
      value: '3',
      label: {
        value: 'Other Other value',
        subvalue: 'Other other other val',
        icon: (
          <Avatar sx={{ height: 24, width: 24 }}>
            <>OK</>
          </Avatar>
        )
      },
      menuItem: {
        sx: {
          px: 0,
          mx: 1
        }
      },
      containerSx: {
        height: 32
        // '&': { mx: 1 }
      }
    }
  ],
  value: [],
  label: 'Custom',
  checkSelected: true
};

export const Required = Template.bind({});
Required.args = {
  options: basicOptions,
  label: 'Custom',
  required: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: basicOptions,
  label: 'Custom',
  disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  options: basicOptions,
  label: 'Custom',
  InputProps: { readOnly: true },
  value: 1
};

export const Error = Template.bind({});
Error.args = {
  options: basicOptions,
  label: 'Custom',
  error: true,
  helperText: 'Error over here'
};

export const DisableSpecific = Template.bind({});
DisableSpecific.args = {
  options: [
    ...basicOptions,
    {
      value: 1,
      label: { value: 'Disabled Label' },
      menuItem: { disabled: true }
    }
  ],
  label: 'Custom'
};

export const WithSubvalue = Template.bind({});
WithSubvalue.args = {
  options: [
    ...basicOptions,
    {
      value: 2,
      label: { value: 'Disabled Label', subvalue: 'Subvalue' }
    }
  ],
  fullWidth: true,
  label: 'Custom'
};
