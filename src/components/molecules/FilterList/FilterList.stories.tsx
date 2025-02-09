import { Grid } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { FieldProps, Form, Formik, FormikProps } from 'formik';
import { useState } from 'react';
import Button from 'src/components/atoms/Button/Button';
import { ArrowDownIcon } from 'src/components/particles/theme/icons/Arrows/arrow-down';
import AvatarAndText from '../AvatarAndText/AvatarAndText';
import CheckboxInputBase from '../Inputs/CheckboxInputBase/CheckboxInputBase';
import type { FilterListProps } from './FilterList';
import FilterList from './FilterList';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Filter List',
  component: FilterList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof FilterList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<FilterListProps> = (args) => {
  const [isIn, setIsIn] = useState(false);
  return (
    <Formik
      initialValues={{
        all: true,
        event: false,
        'non-event': false,
        'special-event': false
      }}
      onSubmit={(v) => {}}
    >
      {(
        formik: FormikProps<{
          all: boolean;
          event: boolean;
          'non-event': boolean;
          'special-event': boolean;
        }>
      ) => {
        args.listSubheaderProps.children = (
          <Grid container data-testid="filter-list">
            <Grid item flexGrow={1}>
              <AvatarAndText
                sx={{ my: 'auto', '&:hover': { cursor: 'pointer' } }}
                onClick={() => setIsIn(!isIn)}
                avatarProps={{
                  children: <ArrowDownIcon />,
                  sx: { backgroundColor: 'unset' }
                }}
                avatarItemSx={{
                  '&.MuiGrid-item': {
                    paddingLeft: '0 !important',
                    paddingTop: '4px !important'
                  }
                }}
                title="Event Types"
                titleTypography={{
                  variant: 'textSmRegular'
                }}
                textSx={{
                  '&.MuiGrid-item': {
                    paddingLeft: '0 !important',
                    paddingTop: '4px !important'
                  }
                }}
              />
            </Grid>
            <Grid item>
              <Button
                label={'Reset'}
                variant="text"
                onClick={() =>
                  formik.setValues({
                    all: true,
                    event: false,
                    'non-event': false,
                    'special-event': false
                  })
                }
              />
            </Grid>
          </Grid>
        );
        return (
          <Form>
            <FilterList {...args} isIn={isIn} />
          </Form>
        );
      }}
    </Formik>
  );
};

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  listSubheaderProps: {
    children: <></>
  },
  fields: [
    {
      name: 'all',
      children: ({ field, form, meta }: FieldProps<any>) => {
        return (
          <CheckboxInputBase
            field={field}
            form={form}
            meta={meta}
            type={'checkbox'}
            color={'success'}
            onChange={(e) => {
              form.setFieldValue('all', e.target.checked);
            }}
            labelProps={{
              // value: 'end',
              label: 'All Events',
              labelPlacement: 'end',
              sx: {
                display: 'flex',
                alignItems: 'center',
                '& .MuiFormControlLabel-label': {
                  pb: 0
                }
              }
            }}
          />
        );
      }
    },
    {
      name: 'event',
      children: ({ field, form, meta }: FieldProps<any>) => {
        return (
          <CheckboxInputBase
            field={field}
            form={form}
            meta={meta}
            type={'checkbox'}
            color={'success'}
            onChange={(e) => {
              form.setFieldValue('event', e.target.checked);
            }}
            labelProps={{
              // value: 'end',
              label: 'Event',
              labelPlacement: 'end',
              sx: {
                display: 'flex',
                alignItems: 'center',
                '& .MuiFormControlLabel-label': {
                  pb: 0
                }
              }
            }}
          />
        );
      }
    },
    {
      name: 'non-event',

      children: ({ field, form, meta }: FieldProps<any>) => {
        return (
          <CheckboxInputBase
            field={field}
            form={form}
            meta={meta}
            type={'checkbox'}
            color={'success'}
            onChange={(e) => {
              form.setFieldValue('non-event', e.target.checked);
            }}
            labelProps={{
              // value: 'end',
              label: 'Non-Events',
              labelPlacement: 'end',
              sx: {
                display: 'flex',
                alignItems: 'center',
                '& .MuiFormControlLabel-label': {
                  pb: 0
                }
              }
            }}
          />
        );
      }
    },
    {
      name: 'special-event',

      children: ({ field, form, meta }: FieldProps<any>) => {
        return (
          <CheckboxInputBase
            field={field}
            form={form}
            meta={meta}
            type={'checkbox'}
            color={'success'}
            onChange={(e) => {
              form.setFieldValue('special-event', e.target.checked);
            }}
            labelProps={{
              // value: 'end',
              label: 'Special Events',
              labelPlacement: 'end',
              sx: {
                display: 'flex',
                alignItems: 'center',
                '& .MuiFormControlLabel-label': {
                  pb: 0
                }
              }
            }}
          />
        );
      }
    }
  ]
};
