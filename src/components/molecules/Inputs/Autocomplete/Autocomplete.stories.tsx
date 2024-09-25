import type { Story, ComponentMeta } from '@storybook/react';
import { Field, Formik } from 'formik';
import type { AutocompleteProps } from './Autocomplete';
import Autocomplete from './Autocomplete';
import Chip, { ChipProps } from 'src/components/atoms/Chip/Chip';
import Avatar from 'src/components/atoms/Avatar';
import { Box, Typography, AutocompleteRenderGroupParams } from '@mui/material';
import { Fragment } from 'react/jsx-runtime';
import { SearchLgIcon } from 'src/components/particles/theme/overrides/CustomIcons';
import { Divider } from 'src/components/atoms';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Input/Autocomplete',
  component: Autocomplete
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Autocomplete>;
const options = [
  { label: 'test', id: 'test' },
  { label: 'test2', id: 'test2' },
  { label: 'The label', id: 'test3' }
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AutocompleteProps> = (args) => {
  return (
    <Formik initialValues={{ attendeeIds: [] }} onSubmit={(v) => {}}>
      {(formik) => {
        return (
          <Field>
            {({ field, form, meta }: any) => {
              return (
                <Autocomplete
                  clearOnBlur={true}
                  multiple={true}
                  isOptionEqualToValue={(
                    option: {
                      label: string;
                      id: string;
                    },
                    value: {
                      label: string;
                      id: string;
                    }
                  ) => {
                    return option.id === value.id;
                  }}
                  disablePortal
                  {...args}
                  textInputProps={{
                    label: 'Send To',
                    placeholder: 'Select Attendees',
                    fullWidth: true,
                    required: true,
                    sx: {
                      '& .MuiInputBase-root': {
                        py: 0.375
                      }
                    },
                    InputProps: {
                      startAdornment: <Avatar src={undefined}>{'JD'}</Avatar>
                    }
                  }}
                  fieldAttributes={{ name: 'attendeeIds' }}
                  options={options}
                  renderTags={(tagValue, getTagProps) => {
                    return tagValue.map((option, index) => {
                      const chipProps: ChipProps = getTagProps({
                        index
                      }) as unknown as ChipProps;
                      return <Chip label={option.label} {...chipProps} />;
                    });
                  }}
                  onChange={(event, value) => {
                    if (value) {
                      if ((value as any)?.id === 'all') {
                        formik.setFieldValue('attendeeIds', [
                          (value as any)?.id
                        ]);
                      } else {
                        const newValues = [
                          ...formik.values.attendeeIds,
                          (value as any)?.id
                        ];
                        formik.setFieldValue('attendeeIds', [
                          ...new Set(newValues)
                        ]);
                      }
                    }
                  }}
                />
              );
            }}
          </Field>
        );
      }}
    </Formik>
  );
};

export const Blank = Template.bind({});
Blank.args = {};

export const Multiple = Template.bind({});
Multiple.args = { multiple: true };
// interface GroupOption {
//   type: string;
//   value: {};
// }

const groupOptions = [
  { type: 'one', label: 'test', id: 'test' },
  { type: 'one', label: 'test2', id: 'test2' },
  { type: 'two', label: 'The label', id: 'test3' }
];

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const GroupTemplate: Story<AutocompleteProps> = (args) => {
  return (
    <Formik initialValues={{ attendeeIds: [] }} onSubmit={(v) => {}}>
      {(formik) => {
        return (
          <Field>
            {({ field, form, meta }: any) => {
              return (
                <Autocomplete
                  clearOnBlur={true}
                  // multiple={true}
                  isOptionEqualToValue={(
                    option: {
                      label: string;
                      type: string;
                      id: string;
                    },
                    value: {
                      label: string;
                      type: string;
                      id: string;
                    }
                  ) => {
                    return option.id === value.id;
                  }}
                  disablePortal
                  {...args}
                  textInputProps={{
                    label: 'Send To',
                    placeholder: 'Select Attendees',
                    fullWidth: true,
                    required: true,
                    sx: {
                      '& .MuiInputBase-root': {
                        py: 0.375
                      }
                    },
                    InputProps: {
                      // startAdornment: <Avatar src={undefined}>{'JD'}</Avatar>
                      startAdornment: <SearchLgIcon sx={{ ml: 3 }} />
                    }
                  }}
                  fieldAttributes={{ name: 'attendeeIds' }}
                  groupBy={(option) => option.type}
                  options={groupOptions}
                  renderGroup={(params: AutocompleteRenderGroupParams) => {
                    return (
                      <Fragment key={params.key}>
                        <Box
                          sx={{
                            padding: '10px 0',
                            backgroundColor: 'grey.100'
                          }}
                        >
                          <Typography variant="h6" sx={{ paddingLeft: 2 }}>
                            {params.group}
                          </Typography>
                        </Box>
                        <Divider />
                        {params.children}
                      </Fragment>
                    );
                  }}
                  renderTags={(tagValue, getTagProps) => {
                    return tagValue.map((option, index) => {
                      const chipProps: ChipProps = getTagProps({
                        index
                      }) as unknown as ChipProps;
                      return (
                        <Chip
                          label={option.label}
                          variant={'outlined'}
                          {...chipProps}
                        />
                      );
                    });
                  }}
                  onChange={(event, value) => {
                    if (value) {
                      if ((value as any)?.id === 'all') {
                        formik.setFieldValue('attendeeIds', [
                          (value as any)?.id
                        ]);
                      } else {
                        const newValues = [
                          ...formik.values.attendeeIds,
                          (value as any)?.id
                        ];
                        formik.setFieldValue('attendeeIds', [
                          ...new Set(newValues)
                        ]);
                      }
                    }
                  }}
                />
              );
            }}
          </Field>
        );
      }}
    </Formik>
  );
};

export const GroupMultiple = GroupTemplate.bind({});
GroupMultiple.args = {};
