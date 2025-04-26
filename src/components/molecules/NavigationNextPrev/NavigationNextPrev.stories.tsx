import type { ComponentMeta, Story } from '@storybook/react';
import { Formik } from 'formik';
import ItemNavigationNextPrev, {
  ItemNavigationNextPrevProps
} from './NavigationNextPrev';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/ItemNavigationNextPrev',
  component: ItemNavigationNextPrev
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof ItemNavigationNextPrev>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ItemNavigationNextPrevProps> = (args) => {
  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <ItemNavigationNextPrev {...args} />;
    </Formik>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
