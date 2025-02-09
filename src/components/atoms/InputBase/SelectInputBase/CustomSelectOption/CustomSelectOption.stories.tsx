import type { Story, ComponentMeta } from '@storybook/react';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import { User01Icon } from 'src/components/particles/theme/icons/Users/user-01';
import type { CustomSelectOptionProps } from './CustomSelectOption';
import { CustomSelectOption } from './CustomSelectOption';
const image = 'https://robohash.org/WTN.png?set=set1';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Atoms/Input Base/Select Input Base/Custom Select Option',
  component: CustomSelectOption
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CustomSelectOption>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CustomSelectOptionProps> = (args) => (
  <CustomSelectOption {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
  value: 'Some value'
};

export const WithSubvalue = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithSubvalue.args = {
  value: 'Some value',
  subvalue: 'Some other val'
};

export const WithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcon.args = {
  value: 'Some value',
  subvalue: 'Some other val',
  icon: <User01Icon />
};

export const WithAvatar = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithAvatar.args = {
  value: 'Some value',
  subvalue: 'Some other val',
  icon: (
    <Avatar
      alt={'user'}
      src={image as unknown as string}
      sx={{ height: 24, width: 24 }}
    />
  )
};

export const WithChecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithChecked.args = {
  value: 'Some value',
  subvalue: 'Some other val',
  icon: (
    <Avatar sx={{ height: 24, width: 24 }}>
      <>HR</>
    </Avatar>
  ),
  checked: true
};
