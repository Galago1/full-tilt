import type { Story, ComponentMeta } from '@storybook/react';
import Avatar from 'src/components/atoms/Avatar/Avatar';
import {
  ChevronDownIcon,
  DotsVerticalIcon
} from 'src/components/particles/theme/overrides/CustomIcons';
import type { DropdownAnchorProps } from './DropdownAnchor';
import { DropdownAnchor } from './DropdownAnchor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Molecules/Dropdown/Dropdown Anchor',
  component: DropdownAnchor
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof DropdownAnchor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DropdownAnchorProps> = (args) => (
  <DropdownAnchor {...args} />
);

export const ButtonWithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonWithIcon.args = {
  buttonProps: {
    size: 'small',
    endIcon: <ChevronDownIcon />
  },
  label: 'Account'
};

export const ButtonWithIconOpen = Template.bind({});
ButtonWithIcon.args = {
  buttonProps: {
    size: 'small',
    endIcon: <ChevronDownIcon />
  },
  label: 'Account',
  isOpen: true
};

export const IconButtonWithIcon = Template.bind({});
IconButtonWithIcon.args = {
  iconButtonProps: {
    size: 'small'
  },
  label: <DotsVerticalIcon />,
  isOpen: true
};

export const IconButtonWithAvatar = Template.bind({});
IconButtonWithAvatar.args = {
  iconButtonProps: {
    size: 'small'
  },
  label: (
    <Avatar>
      <>HR</>
    </Avatar>
  )
};
