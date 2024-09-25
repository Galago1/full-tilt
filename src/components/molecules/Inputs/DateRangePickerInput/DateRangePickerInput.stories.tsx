import type { ComponentMeta, Story } from '@storybook/react';
import { Field, Formik } from 'formik';
import type { DateRangePickerInputProps } from './DateRangePickerInput';
import DateRangePickerInput from './DateRangePickerInput';
import Button from 'src/components/atoms/Button';
import {
  UseDateFieldProps,
  BaseSingleInputFieldProps,
  FieldSection,
  DateValidationError
} from '@mui/x-date-pickers';
import { forwardRef, useRef, useState } from 'react';
import { Box } from '@mui/material';
interface ButtonFieldProps
  extends UseDateFieldProps<any>,
    BaseSingleInputFieldProps<
      any | null,
      any,
      FieldSection,
      DateValidationError
    > {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonField = forwardRef((props: ButtonFieldProps, _ref: any) => {
  const {
    setOpen,
    label,
    id,
    disabled,
    InputProps: { ref } = {},
    inputProps: { 'aria-label': ariaLabel } = {}
  } = props;

  return (
    <Box ref={_ref}>
      <Button
        variant="outlined"
        id={id}
        disabled={disabled}
        ref={ref}
        aria-label={ariaLabel}
        onClick={() => setOpen?.((prev) => !prev)}
        label={(label as any) ?? 'Pick a date'}
        // startIcon={<CalendarIcon />}
      />
    </Box>
  );
});

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Date Range Input',
  component: DateRangePickerInput
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DateRangePickerInput>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DateRangePickerInputProps> = (args) => {
  return (
    <Formik initialValues={{ name: [new Date()] }} onSubmit={(v) => {}}>
      <Field
        component={DateRangePickerInput}
        localeText={{ start: 'Check-in', end: 'Check-out' }}
        name="name"
        {...args}
      />
    </Formik>
  );
};

const NakedTemplate: Story<DateRangePickerInputProps> = (args) => {
  const [value, onChange] = useState<any>([new Date(), null]);
  const field: any = { onChange };
  return <DateRangePickerInput value={value} field={field} {...args} />;
};

const ButtonTemplate: Story<DateRangePickerInputProps> = (args) => {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);
  return (
    <Formik initialValues={{ name: [new Date()] }} onSubmit={(v) => {}}>
      {(formik) => {
        return (
          <Field
            component={DateRangePickerInput}
            slots={{ field: ButtonField }}
            slotProps={{
              field: {
                setOpen,
                label: 'Date TBD',
                ref: buttonRef
              } as any,
              popper: {
                ref: buttonRef.current
              }
            }}
            localeText={{ start: 'Check-in', end: 'Check-out' }}
            closeOnSelect={false}
            name="name"
            open={open}
            sx={{
              backgroundColor: 'red'
            }}
            onClose={(a: any, b: any) => {
              setOpen(false);
            }}
            onOpen={() => setOpen(true)}
            {...args}
          />
        );
      }}
    </Formik>
  );
};

export const Normal = Template.bind({});
Normal.args = {
  label: 'Custom'
};

export const Required = Template.bind({});
Required.args = {
  label: 'Custom',
  required: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Custom'
  // disabled: true
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: 'Custom'
  // value: '500',
  // readOnly: true
  // helperText: 'How much does a dog weigh?'
};

export const ButtonDateRange = ButtonTemplate.bind({});
ButtonDateRange.args = {
  label: 'Custom'
};

export const NakedRange = NakedTemplate.bind({});
ButtonDateRange.args = {
  label: 'Custom'
};

// export const Error = Template.bind({});
// Error.args = {
//   label: 'Custom',
//   error: true,
//   helperText: 'Error over here'
// };
