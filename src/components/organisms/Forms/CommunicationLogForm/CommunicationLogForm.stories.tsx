import type { Story, ComponentMeta } from '@storybook/react';
import type { CommunicationLogFormProps } from './CommunicationLogForm';
import CommunicationLogForm from './CommunicationLogForm';
import { Default } from '../../AttachmentContainer/AttachmentContainer.stories';
import { SelectOption } from 'src/components/atoms/InputBase/SelectInputBase/SelectInputBase';

interface Test {
  contact?: string;
  note?: string;
  position?: string;
  communication?: string;
  category?: string;
  attachment?: File | null;
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Organisms/Forms/Communication Log Form',
  component: CommunicationLogForm
  // // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   // styles: { backgroundColor: { control: 'color' } }
  // }
} as ComponentMeta<typeof CommunicationLogForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<CommunicationLogFormProps<Test>> = (args) => (
  <CommunicationLogForm {...args} />
);
// This name is not flying with storybook for some reason
// const Default = Template.bind({});
// Default.args = {};

const contactOptions: SelectOption[] = [
  { value: 'sdklcasm', label: { value: 'Olivia Munn' } },
  { value: 'asdkjcmas', label: { value: 'Olivia Mann' } }
];

export const Blank = Template.bind({});
Blank.args = {
  initialValues: {
    note: '',
    contact: 'none',
    position: '',
    communication: '',
    category: '',
    attachment: null
  },
  onSubmit: (values) => {},
  contactFieldProps: {
    name: 'contact',
    //@ts-ignore
    fullWidth: true,
    label: 'Contact',
    defaultOptionLabel: 'Contact',
    defaultValue: 'none',
    options: contactOptions,
    SelectProps: {
      MenuProps: {
        PaperProps: {
          style: { maxHeight: 200 }
        }
      }
    }
  },
  positionFieldProps: {
    name: 'position',
    //@ts-ignore
    fullWidth: true,
    placeholder: 'Enter position',
    label: 'Position'
  },
  communicationFieldProps: {
    name: 'communication',
    //@ts-ignore
    fullWidth: true,
    label: 'Communication',
    defaultOptionLabel: 'Communication',
    defaultValue: 'none',
    options: contactOptions,
    SelectProps: {
      MenuProps: {
        PaperProps: {
          style: { maxHeight: 200 }
        }
      }
    }
  },
  categoryFieldProps: {
    name: 'category',
    //@ts-ignore
    fullWidth: true,
    label: 'Category',
    defaultOptionLabel: 'Category',
    defaultValue: 'none',
    options: contactOptions,
    SelectProps: {
      MenuProps: {
        PaperProps: {
          style: { maxHeight: 200 }
        }
      }
    }
  },
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
