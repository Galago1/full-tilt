import { Box, FormControl, FormGroup, Theme } from '@mui/material';
import type { ComponentMeta, Story } from '@storybook/react';
import Checkbox from 'src/components/atoms/Checkbox/Checkbox';
import CheckboxInputBase, { CheckboxInputBaseProps } from './CheckboxInputBase';
import { Formik, Field } from 'formik';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Checkbox Input Base',
  component: Checkbox
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// Placement
const TemplateLabelPlacement: Story<CheckboxInputBaseProps> = (args) => (
  <FormControl component="fieldset">
    <FormGroup aria-label="position" row>
      <Formik initialValues={{ name: '' }} onSubmit={(v) => {}}>
        <Field component={CheckboxInputBase} {...args} />
      </Formik>
    </FormGroup>
  </FormControl>
);

export const PlacementCheckbox = TemplateLabelPlacement.bind({});
PlacementCheckbox.args = {
  color: 'success',
  labelProps: {
    value: 'top',
    label: 'Top',
    labelPlacement: 'top'
  }
};

// Indeterminate
const TemplateIndeterminate: Story<CheckboxInputBaseProps> = (args) => {
  // const children = (
  //   <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>
  //     <Formik initialValues={{}} onSubmit={() => {}}>
  //       <Field
  //         component={CheckboxInputBase}
  //         {...args}
  //         labelProps={{ label: 'Child 1' }}
  //       />
  //       <Field
  //         component={CheckboxInputBase}
  //         {...args}
  //         labelProps={{ label: 'Child 2' }}
  //       />
  //     </Formik>
  //   </Box>
  // );

  return (
    <Formik initialValues={{ name: '' }} onSubmit={(v) => {}}>
      <Field
        component={CheckboxInputBase}
        {...args}
        labelProps={{ label: 'Parent' }}
      />
      {/* {children} */}
    </Formik>
  );
};

export const indeterminateCheckbox = TemplateIndeterminate.bind({});
indeterminateCheckbox.args = {
  color: 'success'
};

const Template: Story<CheckboxInputBaseProps> = (args) => {
  return (
    <Formik initialValues={{ name: '' }} onSubmit={(v) => {}}>
      <Field component={CheckboxInputBase} {...args} />
    </Formik>
  );
};
export const Normal = Template.bind({});
Normal.args = {
  labelProps: {
    label: 'Yes',
    sx: {
      border: (theme: Theme) => `1px solid ${theme.palette.grey[300]}`,
      display: 'flex',
      alignItems: 'center',
      '& .MuiFormControlLabel-label': {
        pb: 0
      }
    }
  },
  // name: 'name',
  color: 'success'
};
