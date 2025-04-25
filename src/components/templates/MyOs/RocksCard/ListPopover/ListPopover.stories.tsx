import type { ComponentMeta, Story } from '@storybook/react';
import { Formik } from 'formik';
import ThemeProvider from 'src/components/particles/theme';
import type { ListPopoverProps } from './ListPopover';
import ListPopover from './ListPopover';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/DataGridList/ListPopover',
  component: ListPopover
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ListPopover>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ListPopoverProps> = (args) => (
  <ThemeProvider>
    <Formik initialValues={{ numberOfEmployees: 'none' }} onSubmit={() => {}}>
      <ListPopover {...args} />
    </Formik>
  </ThemeProvider>
);

export const Blank = Template.bind({});
Blank.args = {
  options: []
};
