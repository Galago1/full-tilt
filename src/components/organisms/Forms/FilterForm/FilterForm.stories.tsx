import { Grid, Theme, Typography } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import { FieldProps, Form, Formik, FormikProps } from 'formik';
import Button from 'src/components/atoms/Button/Button';
import { AvatarAndText, CheckboxInputBase } from 'src/components/molecules';
import FilterList from 'src/components/molecules/FilterList/FilterList';
import {
  ArrowDownIcon,
  ArrowRightIcon,
  ChevronDownIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import type { FilterFormProps } from './FilterForm';
import FilterForm from './FilterForm';
import { useEffect, useState } from 'react';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Filter Form',
  component: FilterForm
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof FilterForm>;

const ElementPart = ({ isIn, setIsIn, formik }: any) => (
  <Grid container data-testid="filter-list">
    <Grid item flexGrow={1}>
      <AvatarAndText
        sx={{ my: 'auto', '&:hover': { cursor: 'pointer' } }}
        onClick={() => setIsIn(!isIn)}
        avatarProps={{
          children: isIn ? <ArrowDownIcon /> : <ArrowRightIcon />,
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
          variant: 'textXsRegular'
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

const fields = [
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
          checked={form.values['all']}
          labelProps={{
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
          checked={form.values['event']}
          labelProps={{
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
          checked={form.values['non-event']}
          labelProps={{
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
          checked={form.values['special-event']}
          labelProps={{
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
];

const TheForm = ({ isIn, setIsIn }: any) => {
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
        const yargs = {
          listSubheaderProps: {
            children: (
              <ElementPart isIn={isIn} setIsIn={setIsIn} formik={formik} />
            )
          },
          fields
        };
        return (
          <Form style={{ width: '100%' }}>
            <FilterList {...yargs} isIn={isIn} />
          </Form>
        );
      }}
    </Formik>
  );
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<FilterFormProps> = (args) => {
  const [isIn, setIsIn] = useState(true);
  const [dropdownListItems, setDropdownListItems] = useState(
    [] as unknown as any
  );
  useEffect(() => {
    const menuItem = {
      menuItemProps: {
        sx: { p: 0 },
        disableRipple: true,
        children: <TheForm isIn={isIn} setIsIn={setIsIn} />
      }
    };
    setDropdownListItems([menuItem] as any);
  }, [isIn]);

  return <FilterForm {...args} dropdownListItems={dropdownListItems} />;
};
// This name is not flying with storybook for some reason
// const Default = Template.bind({});
// Default.args = {};

export const EmptyForm = Template.bind({});
EmptyForm.args = {
  buttonProps: {
    size: 'small',
    variant: 'outlined',
    endIcon: <ChevronDownIcon />,
    color: 'secondary',
    sx: {
      padding: (theme) => theme.spacing(1.125, 1.25, 1.125, 1)
    }
  },
  label: (
    <Typography
      component={'span'}
      variant={'textMdRegular'}
      sx={{
        minWidth: 264,
        textAlign: 'left',
        padding: 0,
        lineHeight: '1.1875rem'
      }}
    >
      Filters
    </Typography>
  ),
  dropdownMenuProps: {
    onClick: () => {},
    PaperProps: {
      elevation: 0,
      sx: {
        overflow: 'visible',
        minWidth: (theme: Theme) => theme.spacing(39),
        mt: 1.25,
        borderRadius: 0,
        border: (theme) => `1px solid ${theme.palette.grey[300]}`,
        '& .MuiList-root': {
          py: 0
        }
      }
    }
  },
  dropdownListItems: undefined
};
