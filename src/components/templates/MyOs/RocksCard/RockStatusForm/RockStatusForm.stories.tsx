import type { Story, ComponentMeta } from '@storybook/react';
import type { RockStatusFormProps } from './RockStatusForm';
import RockStatusForm from './RockStatusForm';
import { Formik } from 'formik';
import ThemeProvider from 'src/components/particles/theme';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/DataGridList/RockStatusForm',
  component: RockStatusForm
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof RockStatusForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<RockStatusFormProps> = (args) => (
  <ThemeProvider>
    <Formik initialValues={{ numberOfEmployees: 'none' }} onSubmit={() => {}}>
      <RockStatusForm {...args} />
    </Formik>
  </ThemeProvider>
);

export const Blank = Template.bind({});
Blank.args = {};
