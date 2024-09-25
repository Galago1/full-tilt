import type { Story, ComponentMeta } from '@storybook/react';
import type { NoteFormProps } from './NoteForm';
import NoteForm from './NoteForm';
import { Default } from '../../AttachmentContainer/AttachmentContainer.stories';

interface Test {}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Note Form',
  component: NoteForm
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof NoteForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<NoteFormProps<Test>> = (args) => <NoteForm {...args} />;
// This name is not flying with storybook for some reason
// const Default = Template.bind({});
// Default.args = {};

export const Blank = Template.bind({});
Blank.args = {
  initialValues: {
    note: '',
    attachment: null
  },
  onSubmit: (values) => {},
  textAreaFieldProps: {
    name: 'note'
  },
  //@ts-ignore
  textAreaInputProps: {
    placeholder: 'Enter a note'
  },
  attachmentContainerProps: Default.args,
  buttonProps: {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    label: 'Submit'
  }
};
