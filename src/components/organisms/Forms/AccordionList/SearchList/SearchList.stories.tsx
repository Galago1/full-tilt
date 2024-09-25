import type { ComponentMeta, Story } from '@storybook/react';
import type { SearchListProps } from './SearchList';
import SearchList from './SearchList';
import { Formik } from 'formik';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Accordion List Form/Search List',
  component: SearchList
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof SearchList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SearchListProps> = (args) => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <SearchList {...args} />
    </Formik>
  );
};

export const InitiallyClosed = Template.bind({});
InitiallyClosed.args = {
  checkboxListProps: {
    // sx: { width: '100%' },
    checkboxInputs: [
      {
        labelProps: {
          label: 'Select All',
          sx: {
            display: 'flex',
            alignItems: 'center',
            '& .MuiFormControlLabel-label': {
              pb: 0
            }
          }
        },
        color: 'success'
      }
    ]
  }
};
